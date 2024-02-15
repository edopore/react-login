const BASE_URL =
  "https://50i1wtcume.execute-api.us-east-1.amazonaws.com/dev/seguridad/usuario/";

export default function getUser() {
  return fetch(BASE_URL)
    .then((response) => response.json())
    .catch((error) => error);
}

function createUser(obj) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  };
  return fetch(BASE_URL, options)
    .then((response) => response.json())
    .catch((error) => error);
}
