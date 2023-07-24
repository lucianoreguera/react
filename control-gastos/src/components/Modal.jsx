import { useEffect, useState } from 'react'
import Mensaje from './Mensaje'
import IconCerrarModal from '../img/cerrar.svg'

const Modal = ({ setModal, animarModal, setAnimarModal, agregarGasto, gastoEditar, setGastoEditar }) => {
  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [categoria, setCategoria] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [fecha, setFecha] = useState('')
  const [id, setId] = useState('')

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setNombre(gastoEditar.nombre)
      setCantidad(gastoEditar.cantidad)
      setCategoria(gastoEditar.categoria)
      setId(gastoEditar.id)
      setFecha(gastoEditar.fecha)
    }
  }, [])
  
  const handleCerrarModal = () => {
    setGastoEditar({})
    setAnimarModal(false)

    setTimeout(() => {
      setModal(false)
    }, 300);
  }

  const handleSubmit = e => {
    e.preventDefault()
    
    if ([nombre, cantidad, categoria].includes('')) {
      setMensaje('Todos los campos son obligatorios')

      setTimeout(() => {
        setMensaje('')
      }, 3000)

      return 
    }

    agregarGasto({nombre, cantidad, categoria, id, fecha})
  }

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img 
          src={IconCerrarModal} 
          alt="Icono Cerrar Modal"
          onClick={handleCerrarModal}
        />
      </div>

      <form 
        className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}
        onSubmit={handleSubmit}
      >
        <legend>{ gastoEditar.id ? 'Editar Gasto' : 'Nuevo Gasto' }</legend>

        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          {
            mensaje && <Mensaje tipo="error">{ mensaje }</Mensaje>
          }
          <input
            id="nombre"
            type="text"
            placeholder="Añade el Nombre del Gasto"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            id="cantidad"
            type="number"
            placeholder="Añade la Cantidad del Gasto"
            value={cantidad} 
            onChange={e => setCantidad(Number(e.target.value))}
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoría</label>
          <select 
            id="categoria"
            value={categoria}
            onChange={e => setCategoria(e.target.value)}
          >
            <option value="">-- Seleccionar una opción --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>

        <input type="submit" value={ gastoEditar.id ? 'Guardar Cambios' : 'Añadir Gasto' } />
      </form>
    </div>
  )
}

export default Modal