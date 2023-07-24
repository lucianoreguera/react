const producto = {
    nombre: 'Tablet',
    precio: 300,
    disponible: true
}

// Object methods
// Object.freeze(producto) - no permite modificar ninguna propiedad del objeto
// Object.seal(producto) - permite modificar propiedades, pero no añadirle ni modificarle una

// Rescribir propiedad
producto.nombre = 'Monitor Curvo'
// console.log(producto)

// Añadir Propiedad
producto.imagen = 'imagen.jpg'
// console.log(producto)

// Eliminar propiedades
delete producto.imagen
console.log(producto)