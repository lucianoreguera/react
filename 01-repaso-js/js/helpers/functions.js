function add(n1, n2) {
    return n1 + n2
}

function substract(n1, n2) {
    return n1 - n2
}

// Solo se puede tener un export default por modulo
// export default add

// Para exportar varias funciones
export {
    add,
    substract
}
