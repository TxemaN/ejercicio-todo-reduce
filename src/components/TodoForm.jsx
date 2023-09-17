import React from 'react'
import { useFormulario } from '../hooks/useFormulario'



export const TodoForm = () => {

    const initialState = {
        nombreTarea: "",
        descTarea: ""
    };

    const submitFunction = ({nombreTarea,descTarea}) => {

         if(TodoForm.length <= 0) return 

         const newTodo = {
            id: Date.now(),
            nombreTarea : nombreTarea ,
            descTarea : descTarea,
            done : false ,
            date: new Date()
         };
    }



    const { values, handleSubmit, handleChange, } = useFormulario(initialState , submitFunction);
    const {nombreTarea,descTarea} = values

    return (


        <div>

            <form onSubmit={handleSubmit}>

                <input
                onChange={handleChange} 
                type="text" 
                name='nombreTarea' 
                placeholder='Nombre de la tarea' 
                value={values.nombre} />

                <textarea
                onChange={handleChange} 
                name="descTarea" 
                placeholder='Describe la tarea' 
                value={values.descripcion} 
                cols="30" 
                rows="10">    
                </textarea>

                <input type="submit" />


            </form>

        </div>
    )
}
