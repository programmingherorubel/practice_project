import { Schema, model } from 'mongoose'
import { Faculty, Guardian } from './faculty_interface'

const Gardian = new Schema<Guardian>({
  fathersName: {
    type: String,
    required: true,
  },
  mothersName: {
    type: String,
    required: true,
  },
})
const facultySchema = new Schema<Faculty>({
  id: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['Faculty', 'Admin'],
    default: 'Faculty',
  },
  status: {
    type: String,
    enum: ['active', 'blocked'],
  },
  address: {
    type: String,
    required: true,
  },
  faculty: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true,
    ref: 'user',
  },
  guardian: Gardian,
  phoneNumber: {
    type: String,
    required: true,
  },
},{
  timestamps:true
})

export const FacultySchema = model<Faculty>('faculty', facultySchema)
