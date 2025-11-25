import { useState } from "react";

export default function useForm(submitHandler, initialValues) {
    const [values, setValues] = useState(initialValues);

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name] : e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const descriptionMinLength = 100;
        if (values.description) {
            if (values.description.trim().length < descriptionMinLength) {
                const descriptionError = `The event description must be at least ${descriptionMinLength} characters long.`
                alert(descriptionError)
                throw new Error(descriptionError);
        }
        }

        submitHandler(values)
    }

    return {
        values,
        onChange,
        onSubmit
    }
}