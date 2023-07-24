const saldo = 600
const pagar = 700
const tarjeta = true

if (saldo > pagar) {
    console.log('Puedes pagar con tu saldo')
} else if(tarjeta) {
    console.log('Puedes pagar con tu tarjeta')
} else {
    console.log('No, no puedes pagar')
}

// Operadores lógicos
// || al menos una debe cumplirse
// && todos deben cumplirse
if (saldo > pagar || tarjeta) {
    console.log('Puedes pagar')
} else {
    console.log('No!, no puedes pagar')
}