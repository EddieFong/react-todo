
const initialState = {
    // counterSum: 0,
    todos: []
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "addNewTodo": {
            return { ...state, todos: state.todos.concat(payload) }
        }

        default: {
            return state
        }
    }
};

