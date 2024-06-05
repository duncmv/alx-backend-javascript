export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

export const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "Kampala",
};

export const student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 22,
  location: "Nairobi",
};

export const studentsList: Student[] = [student1, student2];


export const renderTable = (studentsList: Student[]) : void => {
  
  const table = document.createElement('table');
  for (const student of studentsList) {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    firstNameCell.innerText = student.firstName;
    const locationCell = document.createElement('td');
    locationCell.innerText = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
}

  document.body.appendChild(table);
}

renderTable(studentsList);
