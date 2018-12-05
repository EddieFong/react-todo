import React, { Component } from 'react'
import TodoInput from './TodoInput'
import Todos from './Todos'
import { connect } from "react-redux";

class TodoList extends Component {
  state = {todos: []}
  addNewTodo = newTodo => {
    this.state.todos.push(newTodo)
    this.setState({todos: this.state.todos})
  }
  render() {
    return (
      <div>
        <TodoInput onNewTodoAdded={this.addNewTodo}/>
        <Todos todos={this.state.todos}/>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  // counterSum: state.counterSum,
  // counterItems: state.counterItems
}); 

connect(mapStateToProps)(TodoList)

export default connect(mapStateToProps)(TodoList);//let CounterGroup and Redux know each other
