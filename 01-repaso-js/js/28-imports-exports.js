// Si importo funcion que fue exportada por default entonces le podemos poner cualquier nombre
// en este caso se nombro add pero podria ser cualquier nombre
// import add from './helpers/functions.js'

// Cuando importamos y no es por default si es importante que tenga el mismo nombre
import { add } from './helpers/functions.js'

const result = add(20, 30)
console.log(result)