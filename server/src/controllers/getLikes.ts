import db from '../config/database'

export const getLikes = async (id: number) => {
  try {
    const course = await db.any(
      `SELECT COUNT(*) FROM Course_Likes WHERE course_id = ${id}`,
    )
    return course
  } catch (error) {
    console.error('Error getting data:', error)
    throw error
  }
}
