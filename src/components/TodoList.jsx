import React from 'react';
import { Tarea } from './Tarea';

export const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
    return (
        <section className='container'>
            <h3>Tareas</h3>
            {
                todos.map(tarea => (
                    <Tarea
                        key={tarea.id}
                        tarea={tarea}
                        deleteTodo={deleteTodo}
                        toggleTodo={toggleTodo}
                    />
                ))
            }
        </section>
    );
};


