import React from 'react'
import { Tarea } from './Tarea'

export const TodoList = () => {
    const arrayTareas = [1, 2, 3, 4]
    return (
        <div>
            <h3>TAREAS</h3>

            <ul>
                {arrayTareas.map(item => (
                    <>
                    <Tarea key={item} item={item}/>
                    </>

                ))}



            </ul>



        </div>
    )
}
