export default async function authenticate(credentials) {
    return fetch('https://todos-project-api.herokuapp.com/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(response => response.json());
}