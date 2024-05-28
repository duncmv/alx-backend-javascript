export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({status: 200, body: 'success'}))
    .catch(() => new Error())
    .finally(() => console.log('Got response from the API'));
    
}
