import React, { Component } from 'react'
import { connect } from "react-redux";

class TodoInput extends Component {

  addNewTodo = newTodo => {
    this.props.dispatch({
      type: "addNewTodo",
      payload: newTodo
    });
  }

  onclickFunction = () => {
    const { input } = this.refs
    this.addNewTodo(input.value)
    input.value = ''
  }

  render() {
    return (
      <div>
        <input ref="input"/>
        <button onClick={this.onclickFunction}>add</button>
      </div>
    )
  }

}

export default connect(null)(TodoInput);

