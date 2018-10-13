import React from "react";
import {connect} from "react-redux";

class AddBook extends React.Component {
    constructor(props) { 
      super(props);
      this.state = {
        input: ""
      }
    }
    
    onHandleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
    
    buttonClicked() {
      if(!this.state.input) {
         return;
      }
      this.props.buttonClicked(this.state.input);
      this.setState({
        input: ""
      });
    }
    
    render() {
      return (
        <div>
          <div className="addBook">TO READ BOOKS</div>
          <div>
            <input type="text" 
              placeholder="book" 
              onChange={this.onHandleChange.bind(this)} 
              value={this.state.input}/>
            <button 
              className="btn btn-add" 
              onClick={this.buttonClicked.bind(this)}>
                <i className="material-icons">
                  add_circle_outline
                </i>
            </button>
          </div>
        </div>
      );
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      buttonClicked: (name) => {
        dispatch({
          type: "ADD_BOOK",
          payload: name
        });
      }
    }
  }

export default connect(null, mapDispatchToProps)(AddBook);
