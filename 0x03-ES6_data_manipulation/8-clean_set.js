export default function cleanSet(set, startString) {
  try {
    const filtered = [...set].filter((word) => {
      word.startsWith(startString)
    }).map((word) => {
        word.slice(startString.length);
      });
    return filtered.join('-');
  } catch (err) {
    return '';
  }
}
