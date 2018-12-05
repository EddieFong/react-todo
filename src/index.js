import React from 'react';
import ReactDOM from 'react-dom';
import TodoListContainer from "./containers/TodoListContainer";
import reducer from "./reducer";
import {createStore} from "redux";
import { Provider } from "react-redux";

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}> 
      <TodoListContainer/>
    </Provider>,
    document.getElementById("root")
  );
  