import { Schema, model } from 'mongoose'
import { User } from './user_interface'

const userSchema = new Schema<User>({
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
},{
  timestamps:true
})

export const UserModel = model<User>('user', userSchema)
