import React, { Component } from 'react'

export default class TodoInput extends Component {

  onclickFunction = () => {
    const { input } = this.refs
    this.props.addNewTodo(input.value)
    input.value = ''
  }

  onclickCheckBoxFunction = () => {
    let temp = this.refs.active_only.checked
    this.props.getAllTodo(temp)
  }

  render() {
    this.props.getAllTodo("off")
    return (
      <div>
        <input ref="input"/>
        <button onClick={this.onclickFunction}>add</button>
        <input type="checkbox" ref="active_only" onClick={this.onclickCheckBoxFunction}/> Active only
      </div>
    )
  }

}
