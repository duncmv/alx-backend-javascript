import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(filename),])
    .then((res) => (
      res.map((result) => ({
        status: result.status,
        value: result.value === 'fulfilled' ? result.value : `${result.reason.name}: ${result.reason.message}`,
      }))
    ));
}
