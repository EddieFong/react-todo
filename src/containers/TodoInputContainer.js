import TodoInput from '../components/TodoInput';
import { connect } from "react-redux";

// const mapDispatchToProps = {
//   addNewTodo: (newTodo) => {
//     return {
//       type: "addNewTodo_type",
//       payload: newTodo
//     }
//   }
// }

const mapDispatchToProps2 = (dispatch) => {
  return {
    addNewTodo: (newTodo) => {

      const newTodoItem = {
        content: newTodo,
        status: "active"
      }

      fetch("http://localhost:8080/api/todos", {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        mode: 'cors',
        body: JSON.stringify(newTodoItem)
      })
      // .then(res => console.log(res))
        .then(res => res.json())
        .then(({ id, content, status }) => {
          dispatch({
            type: "addNewTodo_type",
            payload: { id, content, status }
          })
        })

    },
    getAllTodo: (ActiveOnly) => {
      
      let link = (ActiveOnly === true) ? "http://localhost:8080/api/todos/search/statusOfTodos?status=active" : "http://localhost:8080/api/todos/search/statusOfTodos?status=active,completed"
      
      fetch(link, {mode: 'cors'})
        .then(res => res.json())
        .then(res => 
          dispatch({
          type: "add_all_todo",
          payload: res._embedded.todos
        }))
    }
  }
}

export default connect(null, mapDispatchToProps2)(TodoInput);

