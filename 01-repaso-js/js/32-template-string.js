const producto = 'Tablet 12 pulgadas'
const precio = 400
const marca = 'Orange'

// Antes de los template string, se concatenaba de esta manera
console.log("Producto: " + producto +", Precio: $"+ precio +" USD, Marca: "+ marca)

// Que lindo es template string
console.log(`Producto: ${producto}, Precio: $${precio} USD, Marca: ${marca}`)