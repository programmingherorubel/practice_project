import { Request, Response } from 'express'
import { userService } from './user_service'
import { sendResponce } from '../../error/responce'
import httpStatus from 'http-status'

const createUserController = async (req: Request, res: Response) => {
  try {
    const { password, faculty } = req.body
    const reuslt = await userService.createUserService(password, faculty)
    sendResponce(res,{
      statusCode:httpStatus.CREATED,
      success:true,
      message:'faculty create successfully',
      data:reuslt
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'data create successfullly',
      data: null,
    })
  }
}

export const usercontroller = {
  createUserController,
}
