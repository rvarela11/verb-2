import React, { Component } from 'react';

class Users extends Component {

  singleUserInfo = (user) => {
    this.props.singleUser(user)
  }

  render() {
    return <div>
      <h2 className="display__title">{this.props.buttonTitle}</h2>
      <ul className="display__ul">
        {this.props.users.map((user, index)=> {
          return <div key={index}>
              <li onClick={this.singleUserInfo.bind(this, user, index)}>
                <span style={{background: (user.group === "IT") ? '#3333FF' : (user.group === "Sales") ? '#ffc600' : (user.group === "Support") ? 'green' : 'black'}}></span>
                <span>{`${user.first_name} ${user.last_name}`}</span>
                <span className="display_span_region">{`${user.region}`}</span>
              </li>
          </div>
        })}
      </ul>
    </div>
  }
}

export default Users;
