import { uid } from 'uid'
import { Faculty } from '../faculty/faculty_interface'
import { User } from './user_interface'
import config from '../../config/config'
import { UserModel } from './user_model'
import { FacultySchema } from '../faculty/faculty_model'
import genarateStudentId from '../faculty/genarateStudentId'

const createUserService = async (password: string, faculty: Faculty) => {
  try {
    const userData: Partial<User> = {}

    userData.email = faculty.email
    userData.role = 'Faculty'
    userData.status = faculty.status
    userData.password = password || (config.password as string)
    
    userData.id =await genarateStudentId()
    
    const result = await UserModel.create(userData)

    if (Object.keys(result).length) {
      faculty.id = result.id 
      faculty.faculty = result._id

      const newFaculty = await FacultySchema.create(faculty)
      return newFaculty
    }
  } catch (error) { console.log(error)}
}

export const userService = {
  createUserService,
}
