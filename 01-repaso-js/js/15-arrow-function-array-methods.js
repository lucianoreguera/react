const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Vue', 'Node.js', 'Express', 'Laravel', 'MySQL', 'Postgres']
const numeros = [10, 20, 30]

let newArray
let result

// Map
const arrMap = tecnologias.map(tech => {
    if (tech === 'HTML') {
        return 'GraphQL'
    } else {
        return tech
    }
})

// Filter
const arrFilter = tecnologias.filter(tech => tech !== 'React')

// Includes - comprueba si el elemento existe en el array
result = tecnologias.includes('React')

// Some - si al menos un elemento cumple una condicion - retorna true o false
result = numeros.some(nro => nro > 15)

// Find - Devuelve el primer elemnto que cumpla la condicion
result = numeros.find(nro => nro > 5)

// Every - retorna true si todos los elementos cumplen una condicion
result = numeros.every(nro => nro > 5)

// Reduce - devuelve un valor - util para acumuladores o sumadores de carritos de compras por ej
result = numeros.reduce((total, actual) => actual + total, 0)

console.log(arrMap)
console.log(arrFilter)
console.log(result)