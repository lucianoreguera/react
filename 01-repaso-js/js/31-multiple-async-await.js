const url = 'https://jsonplaceholder.typicode.com/comments'
const url2 = 'https://jsonplaceholder.typicode.com/photos'

const consultarAPI = async (url, url2) => {
    // Cuando las consultas no dependen una de otra usar Promise.all asi se ejecutan en paralelo
    // Así obtenemos una mejor performance ya que de lo contrario hay que esperar que ejecute una y luego la otra
    
    // Para medir performance se usa la api perfromance
    const start = performance.now()
    const response = await fetch(url)
    const result = await response.json()
    
    const response2 = await fetch(url2)
    const result2 = await response2.json()

    console.log(result)
    console.log(result2)

    const end = performance.now()

    console.log(`Ejecución Primer async: ${end - start} ms`)
}


const consultarAPI2 = async (url, url2) => {
    // Cuando las consultas no dependen una de otra usar Promise.all asi se ejecutan en paralelo
    // Así obtenemos una mejor performance ya que de lo contrario hay que esperar que ejecute una y luego la otra
    
    // Para medir performance se usa la api perfromance
    const start = performance.now()
    const [response, response2] = await Promise.all([fetch(url), fetch(url2)])
    const result = await response.json()
    const result2 = await response2.json()

    console.log(result)
    console.log(result2)

    const end = performance.now()

    console.log(`Ejecución Segundo async: ${end - start} ms`)
}

consultarAPI(url, url2)
consultarAPI2(url, url2)