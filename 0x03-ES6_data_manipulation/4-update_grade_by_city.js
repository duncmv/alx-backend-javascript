export default updateStudentGradeByCity = (students, city, newGrades) => {
  if (!Array.isArray(students)) {
    return [];
  }
  
  newList = students.filter((student) => student.location === city).map((student) => {
    for (let i = 0; i < newGrades.length; i++) {
      if (student.id === newGrades[i].studentId) {
        student.grade = newGrades[i].grade;
      }
    }
    if (i === newGrades.length) student.grade = 'N/A';
  });
  return newList;
}
