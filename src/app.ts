import express, { Application, Request,Response } from 'express'
import cors from 'cors'
const app :Application= express()
import router from './app/router/index'


// parser
app.use(express.json())
app.use(cors())


app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})
app.use('/api/v1',router)

export default app