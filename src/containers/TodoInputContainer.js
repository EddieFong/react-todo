import TodoInput from '../components/TodoInput';
import { connect } from "react-redux";

const mapDispatchToProps = {
  addNewTodo: (newTodo) => {
    return {
      type: "addNewTodo_type",
      payload: newTodo
    }
  }
}

const mapDispatchToProps2 = (dispatch) => {
  return {
    addNewTodo: (newTodo) => {
      dispatch({
        type: "addNewTodo_type",
        payload: newTodo
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(TodoInput);

