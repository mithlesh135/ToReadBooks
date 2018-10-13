import React from "react";
import {connect} from "react-redux";

class BookList extends React.Component {
    constructor(props) {
      super(props);
    } 
    
    removeBook(event) {
      this.props.removeBook(event.currentTarget.dataset.book);
    }
    
    render() { 
      return this.props.books.map(book => {
        return (
          <div key={book} className="list">
            <span>{book}</span>
            <button data-book={book} onClick={this.removeBook.bind(this)} className="btn btn-remove">
                <i className="material-icons">clear</i>
            </button>
          </div>
        )
      })
    }
  }
  
  const mapStateToProps = (state) => {
    return {books: state}
  };
  
  const mapBookDispatchToProps = (dispatch) => {
    return {
      removeBook: function(book) {
        dispatch({
          type: "REMOVE_BOOK",
          payload: book
        });
      }
    }
  };
  
  export default connect(mapStateToProps, mapBookDispatchToProps)(BookList); 