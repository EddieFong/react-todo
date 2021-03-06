import React, { Component } from 'react'

export default class TodoInput extends Component {

  onclickFunction = () => {
    const { input } = this.refs
    this.props.addNewTodo(input.value)
    input.value = ''

    this.onclickCheckBoxFunction()
  }

  onclickCheckBoxFunction = () => {
    let checkedActive = this.refs.show_active.checked
    let checkedComplete = this.refs.show_complete.checked
    this.props.getAllTodo(checkedActive, checkedComplete)
  }

  render() {
    this.props.getAllTodo(true, true)
    return (
      <div>
        <input ref="input"/>
        <button onClick={this.onclickFunction}>add</button>
        <input type="checkbox" ref="show_active" onClick={this.onclickCheckBoxFunction} defaultChecked={true}/> Show Active
        <input type="checkbox" ref="show_complete" onClick={this.onclickCheckBoxFunction} defaultChecked={true}/> Show Complete
      </div>
    )
  }

}
