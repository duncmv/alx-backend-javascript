export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }

  const newList = students.filter((student) => student.location === city).map((student) => {
    let i = 0;
    for (i = 0; i < newGrades.length; i++) {
      if (student.id === newGrades[i].studentId) {
        student.grade = newGrades[i].grade;
      }
    }
    if (i === newGrades.length) student.grade = 'N/A';
  });
  return newList;
}
