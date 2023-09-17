import { useReducer } from 'react';
import { todoReducer } from './TodoReducer';


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodoList = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const handleNewTodo = (newTodo) => {
        dispatch({
            type: '[TODO] add todo',
            payload: newTodo
        });
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] delete todo',
            payload: id
        });
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] toggle todo',
            payload: id
        });
    }

    return {
        todos,
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo
    }
};
