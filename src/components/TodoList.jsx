import React from 'react';
import { Tarea } from './Tarea';

export const TodoList = ({ todos}) => {
    return (
        <section className='container'>
            <h3>Tareas</h3>
            {
                todos.map(todo => (
                    <Tarea key={todo.id}/>
                ))
            }
        </section>
    );
};


