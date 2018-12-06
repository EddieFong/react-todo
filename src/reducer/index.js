
const initialState = {
    // counterSum: 0,
    todos: []
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "addNewTodo_type": {
            return { ...state, todos: state.todos.concat(payload) }
        }
        case "add_all_todo":{
            newTodos = payload
            return {todos: newTodos}
        }
        case "UPDATE_STATUS":
            let newTodos = state.todos.map(item => {
                if (item.id === payload.id) {
                    return { id: payload.id, content: payload.content, status: payload.status };
                } else {
                    return item;
                }
            });
            return { todos: newTodos };
        default: {
            return state
        }
    }
};

