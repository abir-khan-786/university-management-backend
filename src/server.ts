import mongoose from 'mongoose'
import app from './app'

const PORT = 852000

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/test')
    console.log('Database connected')

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`)
    })
  } catch (error) {
    console.log('Database connection failed')
  }
}
