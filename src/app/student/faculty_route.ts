import express from 'express'
import { faculty } from './faculty_controll'



const router = express.Router()


    router.get('/',faculty.getAllFaculties)
    router.get('/:id',)
export default router 