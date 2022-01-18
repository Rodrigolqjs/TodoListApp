import React from 'react'
import { useForm } from '../Hooks/useForm'

export const TodoAdd = ({handdleAddTodo}) => {


    const [{description}, handleInputChange, reset ] = useForm({
        description: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( description.trim().length <=1)   {
            return
        }  
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        handdleAddTodo(newTodo);
        reset()
    }

    return (
        <>
            <h4>Agregar Todo</h4>
                    <hr />

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Aprender ..."
                            autoComplete="off"
                            value={description}
                            onChange={handleInputChange}
                        />

                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1 btn-block"
                        >
                            Agregar
                        </button>

                    </form>
        </>
    )
}
