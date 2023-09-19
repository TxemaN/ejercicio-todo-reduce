import React from 'react';
import { useTodoList } from '../hooks/useTodoList';

export const Tarea = () => {

    const { todos, handleDeleteTodo, handleToggleTodo } = useTodoList();

    return (
        <div className='row border'>
            <div className='col col-8'>
                <p className={todos.done ? 'text-body-secondary text-decoration-line-through' : ''}><strong>{todos.todo}</strong> - {todos.description}</p>
            </div>
            <div className='col col-4 text-end'>
                <button className={todos.done ? 'btn btn-dark' : 'btn btn-success'} onClick={() => handleToggleTodo(todos.id)}>
                    {todos.done ? 'Finalizada' : 'Pendiente'}
                </button>
                <button className='btn btn-danger m-1' onClick={() => handleDeleteTodo(todos.id)}>Eliminar</button>
            </div>
        </div>
    );
};