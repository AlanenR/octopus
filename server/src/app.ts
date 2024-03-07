import express, { Express, Request, Response } from 'express'
import coursesRoutes from './routes/courses'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

app.use('/courses', coursesRoutes)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
