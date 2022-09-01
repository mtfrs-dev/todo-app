export default async function register(credentials) {
    return fetch('https://todos-project-api.herokuapp.com/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(response => response.json());
}