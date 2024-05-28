export default function iterateThroughEmployeesList(employeesList) {
  const text = employeesList.reduce(
    (str, employee, index) =>
      `${str}${employee}${index < employeesList.length - 1 ? ' | ' : ''}`,
    '',
  );

  return text;
}
