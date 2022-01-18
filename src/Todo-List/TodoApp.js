import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import './styles.css'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'

const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || []

    // return[{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }]

} 

export const TodoApp = () => {
    
    const [ todos, dispatch ] = useReducer(todoReducer, [], init)
    
    

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ))
    }, [todos])

    const handleDelete = ( todoId ) => {
        // console.log(todoId);

        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action);

    }

    const handleToggle = (todoId) => {

        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }

    const handdleAddTodo = ( newTodo ) => { 
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

    

        // console.log(todos);
    return (
        <div>
            <h1>Todo App ({todos.length})</h1>
            <hr />

            <div className="row">
                <div className="col-7">

                    <TodoList 
                        todos={todos}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />

                </div>

                <div className="col-5">

                    <TodoAdd 
                        handdleAddTodo={handdleAddTodo}
                    />

                </div>
            </div>
        </div>
    )
}

