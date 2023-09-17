import React from 'react';

export const Tarea = ({ tarea, deleteTodo, toggleTodo }) => {
    return (
        <div>
            <p>
                {tarea.todo}- {tarea.description}
                <button onClick={() => toggleTodo(tarea.id)}> 
                    {tarea.done ? 'Desmarcar' : 'Marcar'}
                </button>
                <button onClick={() => deleteTodo(tarea.id)}>Eliminar</button>
            </p>
        </div>
    );
}


