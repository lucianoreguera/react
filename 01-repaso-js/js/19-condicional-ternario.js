const autenticado = true

// Ternario
autenticado ? console.log('Usuario autenticado') : console.log('No autenticado')

// Doble ternario
const saldo = 600
const pagar = 700
const tarjeta = true

saldo > pagar ? 
    console.log('puedes pagar con saldo') : 
    tarjeta ? console.log('puedes pagar con tarjeta') :
    console.log('no puedes pagar')