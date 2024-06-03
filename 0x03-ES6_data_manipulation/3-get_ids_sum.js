export default getStudentIdsSum = (list) => {
  if (!Array.isArray(list)) {
    return 0;
  }
  return list.reduce((sum, student) => sum + student.id, 0);
}