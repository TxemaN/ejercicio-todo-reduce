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

       
        <form className="mb-5" onSubmit={handleSubmit}>
            <h2 className='h3'>Añadir tarea</h2>
            <input 
                type="text"
                name="todo"
                placeholder="Tarea"
                className="form-control mb-3"
                value={todo}
                onChange={handleInputChange}
                required
            />
            <textarea 
                name="description"
                placeholder="Descripción..."
                className="form-control mb-3"
                value={description}
                onChange={handleInputChange}
                required
            ></textarea>
            <input type="submit" className="form-control btn btn-success" value="Añadir tarea" />
        </form>
    );
};
