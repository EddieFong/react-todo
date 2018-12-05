import React, { Component } from 'react'
import TodoInputContainer from './TodoInputContainer'
import Todos from '../components/Todos'

export default class TodoListContainer extends Component {

  render() {
    return (
      <div>
        <TodoInputContainer/>
        <Todos/>
      </div>
    )
  }
}
