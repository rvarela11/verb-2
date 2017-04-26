import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../actions/index';

class App extends Component {

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

  render() {
    return <div className="mainContainer">
      <h1>Simple Chat</h1>
      <div className="topContainer">
        {
          this.props.messages.map((message, index) => {
            return (
              <h3 key={index}> - {message}</h3>
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
    };
};

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (App);
