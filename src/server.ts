import mongoose from 'mongoose'
import config from './config/config'
import app from './app'

async function main() {
  try {
    await mongoose.connect(config.database as string)
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

main()
