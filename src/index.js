import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import BookListContainer from "./container/BookList";
import AddBookContainer from "./container/AddBook";
import BookStore from "./reducers/BookStore";


ReactDOM.render(
  <Provider store={createStore(BookStore)}>
    <div>
      <AddBookContainer /> 
      <BookListContainer />
    </div>
  </Provider>, document.querySelector("div.container")
);

