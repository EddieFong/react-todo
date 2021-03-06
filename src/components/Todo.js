import React, { Component } from 'react'
export default class Todo extends Component {
toggleItem = () => {
        const originTodo = this.props.todo;
        let newStatus = (originTodo.status === "active") ? "completed" : "active"

        fetch("http://localhost:8080/api/todos/" + originTodo.id, {
            method: 'PATCH',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            mode: 'cors',
            body: JSON.stringify({ status: newStatus})
        })
            .then(res => res.json())
            .then(res => {
                this.props.changeStatusFunction({ id: originTodo.id, content: originTodo.content, status: newStatus });
            })

    }
    render() {
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

