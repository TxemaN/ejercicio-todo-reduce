import React from 'react'
import { TodoList } from './TodoList'
import { useFormulario } from '../hooks/useFormulario'



export const TodoForm = () => {
const initialState={nombreTarea:"", descTarea:"" }

const {values, handleSubmit, handleChange}=useFormulario(initialState)

    return (


        <div>
            
            <form onSubmit={handleSubmit}>
                
                <input onChange={handleChange} type="text" name='nombreTarea' placeholder='Nombre de la tarea' value={values.nombre}/>
                <textarea onChange={handleChange} name="descTarea" placeholder='Describe la tarea' value={values.descripcion} id="" cols="30" rows="10"></textarea>
                <input type="submit" />


            </form>

        </div>
    )
}
