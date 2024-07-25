import fs from 'fs';
//const fs = require('fs');

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, content) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      const lines = content.split('\n');
      const students = {
        'CS': lines.slice(1).filter(line => line.split(',')[3] === 'CS').map(line => line.split(',')[0]),
        'SWE': lines.slice(1).filter(line => line.split(',')[3] === 'SWE').map(line => line.split(',')[0]),
      };
      resolve(JSON.stringify(students));
    }
  });
});

export default readDatabase;
module.exports = readDatabase;
