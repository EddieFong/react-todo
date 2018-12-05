import React, { Component } from 'react'
import TodoInput from './TodoInput'
import Todos from './Todos'
import { connect } from "react-redux";

class TodoList extends Component {

  render() {
    return (
      <div>
        <TodoInput/>
        <Todos todos={this.props.todos} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

connect(mapStateToProps)(TodoList)

export default connect(mapStateToProps)(TodoList)
