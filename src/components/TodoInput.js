import React, { Component } from 'react'
import { connect } from "react-redux";

class TodoInput extends Component {

  // addNewTodo = newTodo => {
  //   this.props.dispatch({
  //     type: "addNewTodo",
  //     payload: newTodo
  //   });
  // }

  onclickFunction = () => {
    const { input } = this.refs
    this.props.addNewTodo(input.value)
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

const mapDispatchToProps = {
  addNewTodo: (newTodo) => {
    return {
      type: "addNewTodo",
      payload: newTodo
    };
  }
}

export default connect(null, mapDispatchToProps)(TodoInput);

