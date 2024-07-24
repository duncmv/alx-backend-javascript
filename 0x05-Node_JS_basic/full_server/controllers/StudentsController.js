import readDatabase from '../utils.js';

class StudentsController {
    static getAllStudents(request, response) {
        readDatabase(process.argv[2]).then((data) => {
            result = `This is the list of our students
Number of students in CS: ${data['CS'].length}. List: ${data['CS'].join(', ')}
Number of students in SWE: ${data['SWE'].length}. List: ${data['SWE'].join(', ')}`;
            response.send(result);
        }).catch((err) => {
            response.status(500).send(err.message);
        });
    }

    static getAllStudentsByMajor(request, response) {
        const { major } = request.params;
        if (major === 'SWE' || major === 'CS') {
            readDatabase(process.argv[2]).then((data) => {
                result = `List: ${data[major].join(', ')}`;
                response.send(result);
            }).catch((err) => {
                response.status(500).send(err.message);
            });
        } else {
            response.status(500).send('Major must be CS or SWE');
        }
    }
}

export default StudentsController;
module.exports = StudentsController;
