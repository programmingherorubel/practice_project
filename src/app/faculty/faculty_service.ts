import { FacultySchema } from "./faculty_model"


const getAllFacaltyService = async()=>{
    const reuslt = await FacultySchema.find({}).populate('faculty')
    return reuslt 
}
const singleFacultyService = async(id:string)=>{
    console.log(id)
    const reuslt = await FacultySchema.findOne({id:id})
    return reuslt 
}


export const service = {
    getAllFacaltyService,
    singleFacultyService,
   
}