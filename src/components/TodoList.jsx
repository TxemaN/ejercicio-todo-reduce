import React from 'react';
import { Tarea } from './Tarea';

export const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
    return (
        <div>
            {todos.map(tarea => (
                <Tarea 
                    key={tarea.id} 
                    tarea={tarea} 
                    deleteTodo={deleteTodo} 
                    toggleTodo={toggleTodo}
                />
            ))}
        </div>
    );
}


