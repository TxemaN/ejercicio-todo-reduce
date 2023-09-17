import React from 'react';

import { TodoForm } from './TodoForm';
import { useTodoList } from '../hooks/useTodoList';
import { TodoList } from './TodoList';


export const TodoApp = () => {
    const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodoList();

    return (
        <div>
            <h1>Lista de Tareas</h1>

            <section>
                <TodoForm handleNewTodo={handleNewTodo} />
            </section>

            <section>
                <TodoList 
                    todos={todos} 
                    deleteTodo={handleDeleteTodo} 
                    toggleTodo={handleToggleTodo} 
                />
            </section>
        </div>
    );
}


