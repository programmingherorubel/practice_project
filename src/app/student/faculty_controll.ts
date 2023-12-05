import { Request,Response } from "express"
import { service } from "./faculty_service"
import { sendResponce } from "../../error/responce"
import httpStatus from 'http-status';

const getAllFaculties =async (req:Request,res:Response)=>{ 
    try{
        const result =await service.getAllFacaltyService()
        sendResponce(res,{
            success:true,
            message:'show all faculty',
            statusCode:httpStatus.OK,
            data:result
        })
    }
    catch(error){
        sendResponce(res,{
            success:false,
            message:'show all faculty',
            statusCode:500,
            data:null
        })
    }
}


export const faculty = {
    getAllFaculties
}