import React, { Component } from 'react'
import { connect } from "react-redux";

class Todos extends Component {
  render() {
    const todos = this.props.todos
    return (
      <div>
        {todos.map((todo, i) => <li key={i}>{todo.content}
        </li>)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

connect(mapStateToProps)(Todos)

export default connect(mapStateToProps)(Todos);
