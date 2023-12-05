import express,{Response} from "express"
type Tresponce <T> = {
    statusCode:number;
    success:boolean;
    message?:string;
    data:T
}

export const sendResponce  =<T> (res:Response,data:Tresponce<T>)=>{
    res.status(data?.statusCode).json({
        success:true ,
        message:data?.message,
        data:data.data
    })
}