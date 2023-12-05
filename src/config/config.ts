import dotenv from 'dotenv'
import path from 'path'



dotenv.config({path:path.join(process.cwd(),'.env')})


export default {
    port :process.env.PORT,
    database :process.env.MONGODB_INFORMATION,
    password:process.env.PASSWORD
}