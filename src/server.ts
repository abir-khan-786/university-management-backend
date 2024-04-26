import mongoose from 'mongoose'
import app from './app'
import config from './config'

async function connect() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('Database connected')

    app.listen(config.port, () => {
      console.log(`Application  is running on http://localhost:${config.port}`)
    })
  } catch (error) {
    console.log('Database connection failed')
  }
}

connect()
