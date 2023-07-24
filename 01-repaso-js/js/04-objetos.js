const producto = {
    nombre: 'Tablet',
    precio: 300,
    disponible: true
}

console.log(producto)
console.log(producto.nombre, producto.precio, producto.disponible)

// Destructuring
const { nombre, precio, disponible } = producto
console.log(nombre, precio, disponible)

// Object Literal Enhacement - agregar propiedades al objeto
const autenticado = true
const usuario = 'Luciano'

const user = {
    autenticado,
    usuario
}

console.log(user)