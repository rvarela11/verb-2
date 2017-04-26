import React, { Component } from 'react';

class MessageInput extends Component {

  state = {
    inputMessage: ''
  }

  handleChange = (e) => {
    this.setState({ inputMessage: e.target.value });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addMessage(this.state.inputMessage);
    this.setState({ inputMessage: '' });
  }

  render () {
    return (
      <div className="bottomContainer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.inputMessage} placeholder='Write...'/>
        </form>
      </div>
    )
  }
}

export default MessageInput;
