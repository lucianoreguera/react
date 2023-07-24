import { useState } from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({ presupuesto, setPresupuesto, setIsValidPresupuesto }) => {
  const [mensaje, setMensaje] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    if (!presupuesto || presupuesto < 1) {
      return setMensaje('No es un presupuesto válido')
    } 

    setMensaje('')
    setIsValidPresupuesto(true)

  }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form 
        className='formulario'
        onSubmit={handleSubmit}
      >
        <div className="campo">
          <label>Definir Presupuesto</label>
          
          <input 
            type="number" 
            className="nuevo-presupuesto"
            placeholder='Añade tu presupuesto'
            onChange={e => setPresupuesto(Number(e.target.value))}
          />

          <input type="submit" value="Añadir" />
        </div>

        {
          mensaje && <Mensaje tipo="error">{ mensaje }</Mensaje>
        }
      </form>
    </div>
  )
}

export default NuevoPresupuesto