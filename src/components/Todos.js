import React, { Component } from 'react'
import { connect } from "react-redux";
import Todo from "./Todo.js";
import TodoContainer from '../containers/TodoContainer.js';

class Todos extends Component {

  render() {
    const todos = this.props.todos
    return (
      <div>
        {this.props.todos.map((todo) => <TodoContainer todo={todo}/> )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

connect(mapStateToProps)(Todos)

export default connect(mapStateToProps)(Todos);
