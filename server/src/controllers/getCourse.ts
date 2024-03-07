import db from '../config/database'

export const getCourse = async (id: number) => {
  try {
    const course = await db.any(`SELECT * FROM courses WHERE id = ${id}`)
    return course
  } catch (error) {
    console.error('Error getting data:', error)
    throw error
  }
}
