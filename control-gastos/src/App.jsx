import { useEffect, useState } from 'react'
import Modal from './components/Modal'
import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos'
import { generarID } from './helpers'
import IconNuevoGasto from './img/nuevo-gasto.svg'
import Filtros from './components/Filtros'

function App() {
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
  )
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
  )
  const [gastoEditar, setGastoEditar] = useState({})
  const [filtro, setFiltro] = useState('')
  const [gastosFiltrado, setGastosFiltrado] = useState([])

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true)

      setTimeout(() => {
        setAnimarModal(true)
      }, 300);
    }
  }, [gastoEditar])

  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0)
  }, [presupuesto])

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
  }, [gastos])

  useEffect(() => {
    if (filtro) {
      const gastosFiltrado = gastos.filter(gasto => gasto.categoria === filtro)

      setGastosFiltrado(gastosFiltrado)
    }
  }, [filtro])
  
  
  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0

    if (presupuestoLS > 0) {
      setIsValidPresupuesto(true)
    }
  }, [])
  

  const handleNuevoGasto = () => {
    setGastoEditar({})
    setModal(true)

    setTimeout(() => {
      setAnimarModal(true)
    }, 300);
  }

  const agregarGasto = gasto => {
    if (gasto.id) {
      const gastosActualizado = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastosActualizado)
      setGastoEditar({})
    } else {
      gasto.id = generarID()
      gasto.fecha = Date.now()

      setGastos([...gastos, gasto])
    }

    setAnimarModal(false)

    setTimeout(() => {
      setModal(false)
    }, 300);
  }

  const eliminarGasto = id => {
    const gastosActualizado = gastos.filter(gasto => gasto.id !== id)

    setGastos(gastosActualizado)
  }

  return (
    <div className={ modal ? 'fijar' : '' }>
      <Header
        gastos={gastos}
        setGastos={setGastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {
        isValidPresupuesto && (
          <>
            <main>
              <Filtros 
                filtro={filtro}
                setFiltro={setFiltro}
              />
              <ListadoGastos 
                gastos={gastos} 
                setGastoEditar={setGastoEditar}
                eliminarGasto={eliminarGasto}
                filtro={filtro}
                gastosFiltrado={gastosFiltrado}
              />
            </main>
            <div className="nuevo-gasto">
              <img 
                src={IconNuevoGasto} 
                alt="Icono Nuevo Gasto" 
                onClick={handleNuevoGasto}
              />
            </div>
          </>
        )
      }

      {
        modal && (
          <Modal 
            setModal={setModal}
            animarModal={animarModal}
            setAnimarModal={setAnimarModal}
            agregarGasto={agregarGasto}
            gastoEditar={gastoEditar}
            setGastoEditar={setGastoEditar}
          />
        )
      }
    </div>
  )
}

export default App
