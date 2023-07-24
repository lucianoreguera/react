const $heading = document.querySelector('.heading')
console.log($heading.textContent)

// Cambio texto de elemento
$heading.textContent = 'Nuevo Heading'
console.log($heading.textContent)

// Agrego valor por defecto a un input
const $inputNombre = document.querySelector('#nombre')
$inputNombre.value = 'Valor por defecto'

const $enlaces = document.querySelectorAll('.navegacion a')
$enlaces.forEach(enlace => enlace.textContent = 'Nuevo enlace')