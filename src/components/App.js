import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage, deleteMessage } from '../actions/index';
import MessageBox from './MessageBox';
import MessageInput from './MessageInput';
import { Link } from 'react-router-dom';

class App extends Component {

  render() {
    return <div className="mainContainer">
      <h1>Simple Chat</h1>
      <Link to='/page1'>Page 1</Link>
      <MessageBox messageBox={this.props.messages} deleteMessage={this.props.deleteMessage}/>
      <MessageInput addMessage={this.props.addMessage}/>
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
