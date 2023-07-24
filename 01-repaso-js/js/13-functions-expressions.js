// En functions declarations por el hoisting se puede llamar a la funcion antes de declararla
// En functions expressions no es posible, da error, ya que se trata como una variable const o let en la fase de creacion y ejecucion de js

const sumar = (n1, n2) => n1 + n2

console.log(sumar(10, 20))