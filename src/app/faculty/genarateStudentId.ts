import { Faculty } from './faculty_interface'
import { FacultySchema } from './faculty_model'
const findLastStudentId = async () => {
  const lastId = await FacultySchema.findOne(
    { role: 'Faculty' },
    { id: 1, _id: 0 },
  )
    .sort({ createAt: 1 })
    .lean()
  return lastId?.id ? lastId.id : undefined
}
console.log(findLastStudentId())

const genarateStudentId = async () => {
  const currentData = 'F-0000'
  const lastStudentId = await findLastStudentId()
  console.log(lastStudentId)
  if (lastStudentId) {
    const lastFacultyId = lastStudentId?.substring(2, 6)
    const convertToNumber = ((Number(lastFacultyId)) + 1).toString().padStart(4,'0')
    console.log(typeof (convertToNumber),convertToNumber)
    const mainnId = `F-${convertToNumber}`

    return mainnId
  } else {
    return currentData
  }
}

  

export default genarateStudentId

// F-0001
