import { useState } from 'react';

export const useForm = (initialState = {}, onSubmit) => {
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState);
    }

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value,
        });
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();
        if (onSubmit) onSubmit(values);
        reset();
    };

    return [values, handleInputChange, handleSubmit];
};
