const url = 'https://jsonplaceholder.typicode.com/users'

const consultarAPI = url => {
    fetch(url)
    .then(response => response.json())
    .then(result => result.forEach(user => console.log(user)))
}

consultarAPI(url)