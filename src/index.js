import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import BookList from "./container/BookList";
import AddBook from "./container/AddBook";
import BookStore from "./reducers/BookStore";

ReactDOM.render(
  <Provider store={createStore(BookStore)}>
    <div>
      <AddBook /> 
      <BookList />
    </div>
  </Provider>, document.querySelector("div.container")
);

