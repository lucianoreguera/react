const producto = {
    nombre: 'Tablet',
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: 'Luciano',
    premium: true
}

// La siguiente forma funciona, pero modifica el objeto producto, y no mantiene la inmutabilidad requerida en los state de react por ejemplo
// producto.cliente = cliente
// console.log(producto)

// Object assign
// Tenemos el mismo problema ya que el objeto producto a mutado
// const nuevoObjeto = Object.assign(producto, cliente)
// console.log(nuevoObjeto)
// console.log(producto)
// console.log(cliente)

// Spread operator - no modifican los objetos originales
const nuevoObjeto2 = { ...producto, ...cliente }
console.log(nuevoObjeto2)
console.log(producto)
console.log(cliente)

// Para mantener las propiedades en cada objeto
const nuevoObjeto3 = { 
    producto: {...producto}, 
    cliente: {...cliente} 
}
console.log(nuevoObjeto3)
console.log(producto)
console.log(cliente)