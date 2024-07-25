import readDatabase from '../utils.js';

class StudentsController {
    static getAllStudents(request, response) {
        readDatabase('./database.csv').then((data) => {
            data = JSON.parse(data);
            response.end(`This is the list of our students
Number of students in CS: ${data['CS'].length}. List: ${data['CS'].join(', ')}
Number of students in SWE: ${data['SWE'].length}. List: ${data['SWE'].join(', ')}`);
        }).catch((err) => {
            response.status(500).send(err.message);
        });
    }

    static getAllStudentsByMajor(request, response) {
        const { major } = request.params;
        if (major === 'SWE' || major === 'CS') {
            readDatabase('./database.csv').then((data) => {
                data = JSON.parse(data);
                response.end(`List: ${data[major].join(', ')}`);
            }).catch((err) => {
                response.status(500).send(err.message);
            });
        } else {
            response.status(500).send('Major parameter must be CS or SWE');
        }
    }
}

export default StudentsController;
module.exports = StudentsController;
