export default function iterateThroughEmployeesList(employeesList) {
  const text = employeesList.reduce((str, employee, index) => {
    return `${str}${employee}${index < employeesList.length - 1 ? ' | ' : ''}`;
  }, '');

  return text;
}
