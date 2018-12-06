import React, { Component } from 'react'
import { connect } from "react-redux";
import Todo from "../components/Todo"

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