const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

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
      resolve(`Number of students: ${csCount + swCount}
Number of students in CS: ${csCount}. List: ${csStudents.join(', ')}
Number of students in SWE: ${swCount}. List: ${swStudents.join(', ')}`);
    }
  });
});

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2]).then((result) => {
    res.send(`This is the list of our students\n${result}`);
  }).catch((error) => {
    res.send(error.message);
  });
});

app.listen(port);

module.exports = app;
