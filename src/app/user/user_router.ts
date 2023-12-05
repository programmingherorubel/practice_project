import express from 'express'
import { usercontroller } from './user_controller'

const router = express.Router()

router.post(
  '/create-faculty',
  usercontroller.createUserController,
)

export default router
