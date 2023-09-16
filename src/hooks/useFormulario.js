import { useState } from "react";

export const useFormulario= (initialState={}, onsubmit) => {

    const [values, setValues] = useState(initialState)

    const reset = () => {

        setValues(initialState)
    }

    const handleChange = ({ target }) => {
        setValues({ ...values, [target.name]: target.value })

    }

    const handleSubmit = ({ }) => {
        if (onsubmit) {
            onsubmit(values)
            reset()
        }



    }

    return {values, handleChange, handleSubmit}

}