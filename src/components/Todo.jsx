import React, { useState } from 'react'
import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList'
export const Todo = () => {
    const [arrayTareas, setArrayTareas] = useState([{}])
    const onNewTask = () => {




    }


    return (
        <>
            <h2>AÑADIR TAREA</h2>
            <section>
                <TodoForm />

            </section>
            <section>

                <TodoList />
            </section>
        </>
    )
}
