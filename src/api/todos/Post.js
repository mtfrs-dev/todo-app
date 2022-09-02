export default async function addGroup(payload) {
    const token = localStorage.getItem('auth_token');
    return fetch("https://todos-project-api.herokuapp.com/todos", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Token ${token}`
        },
        body: JSON.stringify(payload)
    })
    .then(response => response.json());
}