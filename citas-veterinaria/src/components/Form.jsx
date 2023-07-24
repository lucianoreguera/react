import { useState, useEffect } from "react"
import Error from './Error'

const Form = ({ patients, setPatients, patient, setPatient }) => {
  const [pet, setPet] = useState('')
  const [owner, setOwner] = useState('')
  const [email, setEmail] = useState('')
  const [entryDate, setEntryDate] = useState('')
  const [symptons, setSymptons] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    // Sí el objeto esta vacío
    if (Object.keys(patient).length > 0) {
      setPet(patient.pet)
      setOwner(patient.owner)
      setEmail(patient.email)
      setEntryDate(patient.entryDate)
      setSymptons(patient.symptons)
    }
  }, [patient])
  

  const idGenerate = () => {
    const date = Date.now().toString(36)
    const random = Math.random().toString(36).substring(2)

    return date + random
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if ([pet, owner, email, entryDate, symptons].includes('')) {
      return setError(true)
    }

    setError(false)

    const patientObject = {
      pet,
      owner,
      email,
      entryDate,
      symptons
    }

    // Si existe id, entonces edito, si no, creo nuevo paciente
    if (patient.id) {
      patientObject.id = patient.id
      const patientsUpdate = patients.map(patientState => patientState.id === patient.id ? patientObject : patientState)

      setPatients(patientsUpdate)
      setPatient({})
    } else {
      patientObject.id = idGenerate()
      
      setPatients([...patients, patientObject])
    }

    setPet('')
    setOwner('')
    setEmail('')
    setEntryDate('')
    setSymptons('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimientos de Pacientes</h2>

      <p className="text-center text-lg mt-5 mb-10">
        Añade Pacientes y {''}
        <span className="font-bold text-indigo-600">Administralos</span>
      </p>

      <form 
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}
      >
        {/* { error && <Error message={'Todos los campos son obligatorios'} />} */}
        {/* Otra forma de pasar props, es con children, ventaja que se puede pasar varias tags de html - uso-> <Error>CHILDREN</Error> */}
        { error && <Error><p>Todos los campos son obligatorios</p></Error> }
        <div className="mb-5">
          <label htmlFor="pet" className="block text-g uppercase font-bold">
            Nombre Mascota
          </label>
          <input 
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="pet"
            value={pet}
            onChange={(e) => setPet(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="owner" className="block text-g uppercase font-bold">
            Nombre Propietario
          </label>
          <input 
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="owner"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-g uppercase font-bold">
            Email
          </label>
          <input 
            type="email"
            placeholder="Email de contacto"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="entry-date" className="block text-g uppercase font-bold">
            Alta
          </label>
          <input 
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="entry-date"
            value={entryDate}
            onChange={e => setEntryDate(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="symptons" className="block text-g uppercase font-bold">
            Síntomas
          </label>
          <textarea 
            placeholder="Describe los síntomas de la máscota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="symptons"
            value={symptons}
            onChange={e => setSymptons(e.target.value)}
          />
        </div>

        <input 
          type="submit" 
          className="w-full bg-indigo-600 p-3 text-white uppercase font-bold rounded-lg hover:bg-indigo-700 cursor-pointer transition-all"
          value={ patient.id ? 'Editar Paciente' : 'Agregar Paciente' }
        />
      </form>
    </div>
  )
}

export default Form