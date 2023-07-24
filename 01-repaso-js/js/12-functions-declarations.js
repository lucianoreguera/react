// function declaration
function sumar() {
    console.log(2 + 2)
}

function add(n1, n2) { // parametros
    return n1 + n2
}

function substract(n1, n2 = 2) { // parametros por defecto
    return n1 - n2
}

sumar()
console.log(add(10, 5)) // argumentos
console.log(substract(10))
console.log(substract(10, 5))