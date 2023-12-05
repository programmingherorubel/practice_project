import { NextFunction, Request, Response } from 'express'
import { AnyZodObject } from 'zod'
const validRequest = async (scehma: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await scehma.parseAsync(req.body)
      next()
    } catch (error: any) {
      console.log(error)
    }
  }
}
export default validRequest