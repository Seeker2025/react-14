import React, { Component } from 'react';
import ToDo from '../ToDo/ToDo';
import todo from '../../todo.json';
import css from './ToDoList.module.css';
import FormToDo from '../FormToDo/FormToDo';
import { nanoid } from 'nanoid';

class ToDoList extends Component {
    state ={
        todoList: todo,
        isDelete: false,
        isCreate: false,
    }

    componentDidUpdate(_, prevState){
        if(prevState.todoList.length > this.state.todoList.length){
                this.setState({isDelete: true})
            setTimeout(()=>{
                this.setState({isDelete: false})
            }, 1500)
        }

        if(prevState.todoList.length < this.state.todoList.length){
                this.setState({isCreate: true})
              setTimeout(()=>{
                this.setState({isCreate: false})
            }, 1500)
        }

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

addToDo=(value)=>{
    this.setState((prev)=>{
        return{
            todoList: [
            ...prev.todoList,
            { id: nanoid(), title: value, completed: false },
            ],
        }
    })
}

    render(){
        return (
            <>
                <h1>My To-Do List</h1>
                {this.state.isDelete&&
                <div class="alert alert-danger" role="alert">
                To-do delete successfully
                </div>
                }
                {this.state.isCreate&&
                <div class="alert alert-success" role="alert">
                Create to-do successfully
                </div>
                }
                <FormToDo addToDo ={this.addToDo}/>
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