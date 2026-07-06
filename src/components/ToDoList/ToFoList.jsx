import React, { Component } from 'react';
import ToDo from '../ToDo/ToDo';
import todo from '../../todo.json';
import css from './ToDoList.module.css';

class ToDoList extends Component {
    state ={
        todoList: todo,
    }

    handleCheckCompleted=(id)=>{
        this.setState((prevState)=>{
            return {
todoList: prevState.todoList.map((todo)=>
    todo.id ===id
    ?{...todo, completed: !todo.completed}
    :todo)
            }

        })
    }

    handleDelete =(id)=>{
        this.setState((prev)=>({
            todoList: prev.todoList.filter((todo)=>todo.id!==id),
        }))
    }

    render(){
        return (
            <>
                <h1>My To-Do List</h1>
                <ul className={css.listGroup}>
                    {this.state.todoList.map((todo)=>(
                        <ToDo
                         key={todo.id}
                         todo={todo}
                         handleCheckCompleted={this.handleCheckCompleted}
                         handleDelete={this.handleDelete}
                         />
                    ))}

                </ul>
            </>
        )
    }
}

export default ToDoList;