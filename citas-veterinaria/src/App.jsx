import { useEffect, useState } from "react"
import Form from "./components/Form"
import Header from "./components/Header"
import PatientList from "./components/PatientList"

function App() {
  const initialState = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  const [patients, setPatients] = useState(initialState)
  const [patient, setPatient] = useState({})

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(patients))
  }, [patients])
    

  const deletePatient = id => {
    const patientsUpdate = patients.filter(patient => patient.id !== id)

    setPatients(patientsUpdate)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-20 md:flex">
        <Form 
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <PatientList 
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  )
}

export default App
