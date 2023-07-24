const Patient = ({ patient, setPatient, deletePatient }) => {
  const { pet, owner, email, entryDate, symptons, id } = patient

  const handleDelete = () => {
    const response = confirm(`Desea eliminar el paciente ${pet}?`)

    if (response) {
      deletePatient(id)
    }
  }

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
        <span className="font-normal normal-case">{ pet }</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
        <span className="font-normal normal-case">{ owner }</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
        <span className="font-normal normal-case">{ email }</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
        <span className="font-normal normal-case">{ entryDate }</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
        <span className="font-normal normal-case">{ symptons }</span>
      </p>
      <div className="flex justify-between">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercaser rounded-lg"
          onClick={() => setPatient(patient)}
        >Editar</button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercaser rounded-lg"
          onClick={handleDelete}
        >Eliminar</button>
      </div>
    </div>
  )
}

export default Patient