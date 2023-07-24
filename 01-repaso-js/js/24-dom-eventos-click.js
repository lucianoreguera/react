const $heading = document.querySelector('.heading')
$heading.addEventListener('click', (e) => $heading.textContent = 'Nuevo heading al dar click')

const $enlaces = document.querySelectorAll('.navegacion a')
$enlaces.forEach(enlace => {
    enlace.addEventListener('click', () => console.log('Diste click en el enlace'))
})