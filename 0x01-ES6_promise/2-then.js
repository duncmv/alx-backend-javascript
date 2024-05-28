export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .then((res) => {
      console.log('Got a response from the API');
      return res;
    })
    .catch(() => new Error());
}
