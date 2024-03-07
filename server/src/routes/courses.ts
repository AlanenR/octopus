import { Router } from 'express'
import { getAllCourses } from '../controllers/getAllCourses'
import { getCourse } from '../controllers/getCourse'
import { getLikes } from '../controllers/getLikes'

const router = Router()

router.get('/', async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  try {
    const courses = await getAllCourses()
    res.status(201).json(courses)
  } catch (error) {
    res.status(404).json(error)
  }
})

router.get('/:id', async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  const courseId = req.params.id
  try {
    const course = await getCourse(parseInt(courseId))
    res.status(201).json(course)
  } catch (error) {
    res.status(404).json(error)
  }
})

router.get('/:id/likes', async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  const courseId = req.params.id
  try {
    const course = await getLikes(parseInt(courseId))
    res.status(201).json(course)
  } catch (error) {
    res.status(404).json(error)
  }
})

export default router
