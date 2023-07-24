const tech = ['HTML', 'CSS', 'JS', 'React', 'Node.js']

// Destructuring
const [html] = tech

console.log(tech)
console.log(html)

// El destructuring en arreglos extrae por posición del array
// Si queremos extraer 'Node.js'
const [,,,,node] = tech
console.log(node)