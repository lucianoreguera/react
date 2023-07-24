import { useEffect, useState } from "react"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ControlPresupuesto = ({ gastos, setGastos, presupuesto, setPresupuesto, setIsValidPresupuesto }) => {
  const [porcentaje, setPorcentaje] = useState(0)
  const [gastado, setGastado] = useState(0)
  const [disponible, setDisponible] = useState(0)

  useEffect(() => {
    const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0)
    const totalDisponible = presupuesto - totalGastado
    const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2)
    
    setDisponible(totalDisponible)
    setGastado(totalGastado)
    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje)
    }, 1000)
  }, [gastos])
  
  
  const formatearMonto = cantidad => {
    return cantidad.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
  }

  const handleResetApp = () => {
    const respuesta = confirm('¿Deseas reiniciar tu presupuesto y gastos?')

    if (respuesta) {
      setGastos([])
      setPresupuesto(0)
      setIsValidPresupuesto(false)
    }
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar 
          styles={buildStyles({
            pathColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
            trailColor: '#F5F5F5',
            textColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
          })}
          value={porcentaje}
          text={`${porcentaje} Gastado`}
        />
      </div>
      <div className="contenido-presupuesto">
        <button
          className="reset-app"
          type="button"
          onClick={handleResetApp}
        >Resetear App</button>
        <p>
          <span>Presupuesto: </span>{formatearMonto(presupuesto)}
        </p>
        <p className={porcentaje > 100 ? '#DC2626' : '#3B82F6'}>
          <span>Disponible: </span>{formatearMonto(disponible)}
        </p>
        <p>
          <span>Gastado: </span>{formatearMonto(gastado)}
        </p>
      </div>
    </div>
  )
}

export default ControlPresupuesto