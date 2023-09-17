import React from 'react';
import { useForm } from '../hooks/useForm';



export const TodoForm = ({ handleNewTodo }) => {
    const initialState = {
        todo: '',
        description: ''
    };

    const submitFunction = ({ todo, description }) => {
     

        const newTodo = {
            id: Date.now(),
            todo,
            description,
            done: false,
            date: new Date()
        };

        handleNewTodo(newTodo);
    };

    const [formValues, handleInputChange, handleSubmit] = useForm(initialState, submitFunction);
    const { todo, description } = formValues;

    return (
        <div>
            <input 
                type="text"
                name="todo"
                placeholder="Título de la tarea"
                value={todo}
                onChange={handleInputChange}
            />
            <textarea 
                name="description"
                placeholder="Descripción de la tarea"
                value={description}
                onChange={handleInputChange}
            ></textarea>
            <button onClick={handleSubmit}>Agregar</button>
        </div>
    );
};
