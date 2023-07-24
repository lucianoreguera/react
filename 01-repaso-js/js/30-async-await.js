const url = 'https://jsonplaceholder.typicode.com/users'

const consultarAPI = async url => {
    const response = await fetch(url)
    const result = await response.json()

    result.forEach(user => console.log(user))
}

consultarAPI(url)