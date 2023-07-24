// scope global
const precio = 300

// scope funcion
function unaFn() {
    const precio = 600
    console.log(precio)
}

unaFn()
console.log(precio)