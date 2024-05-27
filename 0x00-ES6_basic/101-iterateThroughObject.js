export default function iterateThroughObject(reportWithIterator) {
  let text = "";
  for (let index in reportWithIterator) {
    const employee = reportWithIterator[index];
    text += employee;

    if (index < reportWithIterator.length - 1) {
      text += ' | ';
    }
  }

  return text;
}
