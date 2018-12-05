import React, { Component } from 'react'

export default class TodoInput extends Component {

  onclickFunction = () => {
    const { input } = this.refs
    this.props.addNewTodo(input.value)
    input.value = ''
  }

  render() {
    this.props.getAllTodo()
    return (
      <div>
        <input ref="input"/>
        <button onClick={this.onclickFunction}>add</button>
      </div>
    )
  }

}
