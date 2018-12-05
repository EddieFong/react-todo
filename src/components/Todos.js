import React, { Component } from 'react'
import { connect } from "react-redux";
import Todo from "./Todo.js";

class Todos extends Component {

  render() {
    const todos = this.props.todos
    return (
      <div>
        {this.props.todos.map((todo) => <Todo todo={todo}/> )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  fetchAllTodo: () => {
      dispatch({
          type: "FETCH_ALL_TODO",
          payload: null
      });
  }
});

connect(mapStateToProps, mapDispatchToProps)(Todos)

export default connect(mapStateToProps)(Todos);
