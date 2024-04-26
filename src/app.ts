import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/res', (req: Request, res: any) => {
  res.send('Working sucessfly ')
})
app.get('/sdfsa', (req: Request, res: any) => {
  res.send('Backend Working   ')
})
app.get('/sfd', (req: Request, res: any) => {
  res.send('Backend Working   ')
})
app.get('/', (req: Request, res: any) => {
  res.send('Backend Working   ')
})

export default app
