export default function createIteratorObject(report) {
  const employees = report.allEmployees;

  return Array.prototype.concat(...Object.values(employees));
}
