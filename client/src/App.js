import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { todoList } from './data'
import TodoItem from './TodoItem'

export default class App extends Component{
  constructor(){
    super()
    this.state = {
      todos: todoList
    }
  }
  render(){
    return(
      <div>
        {
          this.state.todos.map(todo=> {
            return <ul key={todo.id}>
              <TodoItem item={todo} />
            </ul>
          })
        }
      </div>
    )
  }
}

