export default async function deleteListItems(todo_id, item_id) {
    const token = localStorage.getItem('auth_token');
    return fetch("https://todos-project-api.herokuapp.com/todos/"+todo_id+"/items/"+item_id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Token ${token}`
        },
    })
    .then(response => response);
}
