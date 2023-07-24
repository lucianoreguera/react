const producto = {
    nombre: 'Tablet',
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: 'Luciano',
    premium: true
}

// Destructuring
const { nombre, precio, disponible } = producto
console.log(nombre, precio, disponible)

// Destructuring de 2 o mas objetos
// const { nombre, premium } = cliente // error ya que ya existe el nombre del destructuring de producto
const { nombre:nombreCliente, premium } = cliente
console.log(nombreCliente, premium)