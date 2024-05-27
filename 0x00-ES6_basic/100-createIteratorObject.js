export default function createIteratorObject(report) {
  employeeList = [];
  for (const dept of report.allEmployees) {
    employeeList.push(...dept);
  }

  return employeeList;
}
