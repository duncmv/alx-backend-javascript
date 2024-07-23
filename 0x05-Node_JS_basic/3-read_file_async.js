const fs = require('fs');

const countStudents = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, content) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      const lines = content.split('\n');
      let csCount = 0;
      let swCount = 0;
      const csStudents = [];
      const swStudents = [];
      for (let i = 1; i < lines.length; i += 1) {
        const [firstName, , , field] = lines[i].split(',');
        if (field === 'CS') {
          csCount += 1;
          csStudents.push(firstName);
        } else if (field === 'SWE') {
          swCount += 1;
          swStudents.push(firstName);
        }
      }
      console.log(`Number of students: ${csCount + swCount}`);
      console.log(`Number of students in CS: ${csCount}. List: ${csStudents.join(', ')}`);
      console.log(`Number of students in SWE: ${swCount}. List: ${swStudents.join(', ')}`);
      resolve(true);
    }
  });
});

module.exports = countStudents;
