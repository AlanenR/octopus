import db from '../config/database'

export const getAllCourses = async () => {
  try {
    const data = await db.any('SELECT * FROM courses')
    return data
  } catch (error) {
    console.error('Error getting data:', error)
    throw error
  }
}
