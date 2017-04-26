import React, { Component } from 'react';

class MessageBox extends Component {

  handleClick = (index) => {
    this.props.deleteMessage(index);
  }

  render () {
    return (
      <div className="topContainer">
        {
          this.props.messageBox.map((message, index) => {
            return (
              <h3 className='message' key={index} onClick={this.handleClick.bind(this,index)}> - {message}</h3>
            )
          })
        }
      </div>
    )
  }
}

export default MessageBox;
