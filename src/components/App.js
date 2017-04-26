import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage, deleteMessage } from '../actions/index';

class App extends Component {

  //Component state to store the value of the input
  state = {
    inputMessage: ''
  }

  //Add a message through input
  handleChange = (e) => {
    this.setState({ inputMessage: e.target.value });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addMessage(this.state.inputMessage);
    this.setState({ inputMessage: '' });
  }

  //Delete a message by clicking on it
  handleClick = (index) => {
    this.props.deleteMessage(index);
  }

  render() {
    return <div className="mainContainer">
      <h1>Simple Chat</h1>
      <div className="topContainer">
        {
          this.props.messages.map((message, index) => {
            return (
              <h3 className='message' key={index} onClick={this.handleClick.bind(this,index)}> - {message}</h3>
            )
          })
        }</div>

      <div className="bottomContainer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.inputMessage} placeholder='Write...'/>
        </form>
      </div>

    </div>
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (inputMessage) => dispatch(addMessage(inputMessage)),
        deleteMessage: (index) => dispatch(deleteMessage(index))
    };
};

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (App);
