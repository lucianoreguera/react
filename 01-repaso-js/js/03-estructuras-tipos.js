// Tipos de datos

// undefined
// let cliente
// console.log(cliente)
// console.log(typeof cliente)

// Boolean
// const descuento = false
// console.log(descuento)
// console.log(typeof descuento)

// Number - todo es tipo number no se discrimina entre enteros, flotantes, etc
// const n1 = 20.20
// const n2 = 30
// const n3 = -100
// console.log(typeof n1)
// console.log(typeof n2)
// console.log(typeof n3)

// String
// const alumno = 'Luciano' // Comillas simple
// let producto = "Monitor 20" // Doble commillas

// BinInt
// let n = 91234567891234123213123123
// console.log(typeof n) // type number
// n = BigInt(n)
// console.log(typeof n) // type bigint
// No se pueden combinar bigint con number

// Symbol - Los Symbol son únicos
// const primerSymbol = Symbol(30)
// const segundoSymbol = Symbol(30)
// demostramos su unicidad
// console.log(primerSymbol === segundoSymbol) // false -> si bien tiene igual valor hacen referencias a distintos simbolos
// Acceder a valores de symbol
// console.log(primerSymbol.valueOf())
// console.log(segundoSymbol.valueOf())

// null - nulo o vacío
const descuento = null
console.log(typeof descuento) // Son tipo object