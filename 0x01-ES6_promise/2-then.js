export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got response from the API');
      return { status: 200, body: 'success' };
    })
    .catch(() => new Error());
}
