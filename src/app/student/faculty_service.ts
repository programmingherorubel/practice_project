import { Faculty } from "./faculty_interface"
import { FacultySchema } from "./faculty_model"

const getAllFacaltyService = async()=>{
    const reuslt = await FacultySchema.find({}).populate('faculty')
    return reuslt 
}


export const service = {
    getAllFacaltyService
}