import React, { Component } from 'react'
import TodoContainer from '../containers/TodoContainer.js';

export default class Todos extends Component {

  render() {
    console.log(this)
    const todos = this.props.todos
    return (
      <div>
        {todos.map((todo) => <TodoContainer todo={todo}/> )}
      </div>
    )
  }
}


