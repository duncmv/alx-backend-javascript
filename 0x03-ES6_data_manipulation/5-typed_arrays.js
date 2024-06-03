export default function createInt8TypedArray (length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  const array = new Int8Array(length);
  array[position] = value;
  return array;
}
