const $form = document.querySelector('#formulario')
$form.addEventListener('submit', e => {
    e.preventDefault()

    const $nombre = document.querySelector('.nombre').value
    const $password = document.querySelector('.password').value
    
    if ($nombre === '' || $password === '') {
        console.log('Todos los campos son obligatorios')
    } else {
        console.log('Todo bien, enviando...')
    }
})