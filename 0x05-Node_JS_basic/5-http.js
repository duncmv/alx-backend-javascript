const http = require('http');
const url = require('url');
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
      resolve(`Number of students: ${csCount + swCount}
Number of students in CS: ${csCount}. List: ${csStudents.join(', ')}
Number of students in SWE: ${swCount}. List: ${swStudents.join(', ')}`);
    }
  });
});

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  const query = url.parse(req.url, true).pathname;
  if (query === '/') {
    res.end('Hello Holberton School!');
  }
  if (query === '/students') {
    res.write('This is the list of our students:\n');
    countStudents(process.argv[2]).then((result) => {
      res.end(result);
    }).catch((error) => {
      res.end(error.message);
    });
  }
}).listen(1245);

module.exports = app;
