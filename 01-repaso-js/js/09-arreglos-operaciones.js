const tech = ['HTML', 'CSS', 'JS', 'React', 'Node.js']

// Añadir elementos
// No recomendados sobre todo si estamos en react, ya que muta el array original
// tech.push('GraphQL') // Añade al final del array
// tech.unshift('GraphQL') // Añade al principio del array

// De nuevo spread operator sirve para agregar elementos sin mutar el original
// const techNew = [ ...tech, 'GraphQL' ] // Añade al principio
// const techNew = [ 'GraphQL', ...tech ] // Añade al final

// Eliminar elementos
// Se recomiendo no usar sobre todo con react ya que mutan los arrays originales
// tech.pop() // Eliminal el ultimo elemento
// tech.shift() // Eliminal el primer elemento
// tech.splice(2, 1) // Elimina de cualquier posición (posicion, cantidad de elementos a rliminar de esa posicion)

// array method -> filter -> crea nuevo arreglo entonces se mantiene la inmutabilidad del array original
// const newArray = tech.filter(t => t !== 'HTML')

// Reemplazar elementos
// Solución rápida pero de nuevo muta el arreglo original
// tech[0] = 'GraphQL'

// array method -> map crea nuevo arreglo entonces se mantiene la inmutabilidad del array original
newArray = tech.map(t => {
    if (t === 'HTML') {
        return 'GraphQL'
    } else {
        return t
    }
})

console.table(tech)
console.table(newArray)