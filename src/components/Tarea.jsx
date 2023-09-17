import React from 'react';

export const Tarea = ({ tarea, deleteTodo, toggleTodo }) => {
    return (
        <div className='row border'>
            <div className='col col-8'>
                <p><strong>{tarea.todo}</strong> - {tarea.description}</p>
            </div>
            <div className='col col-4 text-end'>
                <button className={tarea.done ? 'btn btn-dark' : 'btn btn-success'} onClick={() => toggleTodo(tarea.id)}>
                {tarea.done ? 'Finalizada' : 'Pendiente'}
            </button>
                <button className='btn btn-danger m-1' onClick={() => deleteTodo(tarea.id)}>Eliminar</button>
            </div>
        </div>
    );
}


