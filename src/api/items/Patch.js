export default async function updateListItem(payload, todo_id, item_id) {
    const token = localStorage.getItem('auth_token');
    return fetch("https://todos-project-api.herokuapp.com/todos/"+todo_id+"/items/"+item_id, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Token ${token}`
        },
        body: JSON.stringify(payload)
    })
    .then(response => response.json());
}