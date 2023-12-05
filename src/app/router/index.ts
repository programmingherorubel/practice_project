import { Router } from "express";
import studentRouter from '../student/faculty_route'
import userRouter from '../user/user_router'

const router = Router()

const myRouter = [
    {path:'/faculties',router:studentRouter},
    {path:'/faculties',router:userRouter},
]

myRouter.forEach((route)=> router.use(route.path,route.router))

export default router 