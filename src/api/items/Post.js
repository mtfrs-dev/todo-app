export default async function addListItem(payload, todo_id) {
    const token = localStorage.getItem('auth_token');
    return fetch("https://todos-project-api.herokuapp.com/todos/"+todo_id+"/items", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Token ${token}`
        },
        body: JSON.stringify(payload)
    })
    .then(response => response.json());
}