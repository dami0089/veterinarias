import React from 'react'

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const handleEliminar = () => {
        const respuesta = confirm("Deseas eliminar este paciente?");
        if (respuesta){
            eliminarPaciente(paciente.id)
        }

    }
  return (
    <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
        <p className='font-bold mb-3 text-grey-700 uppercase'>
            Nombre mascota: <span className='font-normal normal-case'>{paciente.nombre}</span>
        </p>
        <p className='font-bold mb-3 text-grey-700 uppercase'>
            Propietario: <span className='font-normal normal-case'>{paciente.propietario}</span>
        </p>
        <p className='font-bold mb-3 text-grey-700 uppercase'>
            Email: <span className='font-normal normal-case'>{paciente.email}</span>
        </p>
        <p className='font-bold mb-3 text-grey-700 uppercase'>
            Fecha alta : <span className='font-normal normal-case'>{paciente.fecha}</span>
        </p>
        <p className='font-bold mb-3 text-grey-700 uppercase'>
            Sintomas: <span className='font-normal normal-case'>{paciente.sintomas}</span>
        </p>

        <div className='flex justify-between mt-10'>
            <button 
            type = 'button'
            className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
            onClick={()=>setPaciente(paciente)}
            
            >Editar</button>
            <button 
            type = 'button'
            className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'
            onClick={handleEliminar}
            
            >Eliminar</button>

            
            
        </div>

    </div>
  )
}

export default Paciente