import Patient from "./Patient"

const PatientList = ({ patients, setPatient, deletePatient }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
    {
      // Si el array tiene pacientes retorna los pacientes si no retorna patients.length = 0
      patients && patients.length ?
      <>
        <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
        
        <p className="text-center text-lg mt-5 mb-10">
          Administra tus {''}
          <span className="font-bold text-indigo-600">Pacientes y Citas</span>
        </p>
  
        {
          patients.map(patient => <Patient key={patient.id} patient={patient} setPatient={setPatient} deletePatient={deletePatient} />)
        }
      </>
      : <>
        <h2 className="font-black text-3xl text-center">No Hay Pacientes</h2>
        
        <p className="text-center text-lg mt-5 mb-10">
          Comienza agregando pacientes {''}
          <span className="font-bold text-indigo-600">y aparecerán en este lugar</span>
        </p>
      </>
    }
    </div>
  )
}

export default PatientList