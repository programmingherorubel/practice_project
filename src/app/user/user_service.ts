import { uid } from "uid"
import { Faculty } from "../student/faculty_interface"
import { User } from "./user_interface"
import config from "../../config/config"
import { UserModel } from "./user_model"
import { FacultySchema } from "../student/faculty_model"


const  createUserService = async(password:string,faculty:Faculty)=>{
    const userData:Partial<User> = {}
    userData.id = uid()
    userData.email = faculty.email
    userData.role=faculty.role
    userData.status=faculty.status
    userData.password =password || (config.password as string)

    const result = await UserModel.create(userData)

    if(Object.keys(result).length){
        faculty.id = result.id 
        faculty.faculty = result._id 

        const newFaculty = await FacultySchema.create(faculty)
        return newFaculty
    }

}

export const userService = {
    createUserService
}