import React, { Component } from 'react'
import TodoInputContainer from './TodoInputContainer'
import TodosContainer from './TodosContainer'

export default class TodoListContainer extends Component {

  render() {
    return (
      <div>
        <TodoInputContainer/>
        <TodosContainer/>
      </div>
    )
  }
}
