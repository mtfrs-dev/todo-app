export default async function getListItems(id) {
    const token = localStorage.getItem('auth_token');
    return fetch('https://todos-project-api.herokuapp.com/todos/'+id+"/items", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Token ${token}`
        },
    })
    .then(response => response.json());
}
