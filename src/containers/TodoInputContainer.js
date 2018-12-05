import React, { Component } from 'react'
import TodoInput from '../components/TodoInput';
import { connect } from "react-redux";

const mapDispatchToProps = {
  addNewTodo: (newTodo) => {
    return {
      type: "addNewTodo",
      payload: newTodo
    }
  }
}

export default connect(null, mapDispatchToProps)(TodoInput);

