const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, content) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      const lines = content.split('\n');
      students = {};
      students['CS'] = [];
      students['SWE'] = [];
      for (let i = 1; i < lines.length; i += 1) {
        const [firstName, , , field] = lines[i].split(',');
        if (field === 'CS') {
          students['CS'].push(firstName);
        } else if (field === 'SWE') {
          students['SWE'].push(firstName);
        }
      }
      resolve(students);
    }
  });
});

export default readDatabase;
module.exports = readDatabase;
