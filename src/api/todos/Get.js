export default async function getTodosList() {
    const token = localStorage.getItem('auth_token');
    return fetch('https://todos-project-api.herokuapp.com/todos', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Token ${token}`
        },
    })
    .then(response => response.json());
}