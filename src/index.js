import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from "./components/TodoList";
import reducer from "./reducer";
import {createStore} from "redux";
import { Provider } from "react-redux";



const store = createStore(reducer);



ReactDOM.render(
    <Provider store={store}> 
      <TodoList/>
    </Provider>,
    document.getElementById("root")
  );
  