import React, { Component } from 'react'
import { connect } from "react-redux";
 class Todo extends Component {
   toggleItem = () => {
    const originTodo = this.props.todo;
    let newStatus = (originTodo.status === "active") ? "complete" : "active"
    this.props.changeStatusFunction({ id: originTodo.id, content: originTodo.content, status: newStatus});
  }
   render() {
       console.log(this)
    let todoItem;
    if (this.props.todo.status === "active") {
      todoItem = <li id={this.props.todo.id} onClick={this.toggleItem} >{this.props.todo.content}</li>
    } else {
      todoItem = <li id={this.props.todo.id} onClick={this.toggleItem} ><s>{this.props.todo.content}</s></li>
    }
    return (
      <div>
        {todoItem}
      </div>
    )
  }
}
 const mapDispatchToProps = dispatch => ({
  changeStatusFunction: todoItem => {
    dispatch({
      type: "UPDATE_STATUS",
      payload: todoItem
    });
  }
});
 connect(null, mapDispatchToProps)(Todo)
 export default connect(null, mapDispatchToProps)(Todo) 