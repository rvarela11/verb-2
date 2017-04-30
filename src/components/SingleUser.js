import React, { Component } from 'react';

class SingleUser extends Component {

  addUser = (user, index, e) => {
    this.props.allData.forEach((allDataUser) => {
      if (allDataUser.id === user.id) {
        allDataUser.group = e.target.innerHTML;
        this.props.changeUserGroup(this.props.allData);
      }
    })
  }

  render() {
    return <div>
      <h2 className="display__title"></h2>
          <ul className="display__ul single-user__ul">
          {this.props.single.map((user, index)=> {
            return <div key={index}>
                      <li>
                        <span style={{background: (user.group === "IT") ? '#3333FF' : (user.group === "Sales") ? '#ffc600' : (user.group === "Support") ? 'green' : 'black'}}></span>
                        <span>{`${user.first_name} ${user.last_name}`}</span>
                        <span>{`${user.region}`}</span>
                      </li>
                      <div className="single-user__buttons">
                        <p>Add to:</p>
                        <p onClick={this.addUser.bind(this, user, index)}>IT</p>
                        <p onClick={this.addUser.bind(this, user, index)}>Sales</p>
                        <p onClick={this.addUser.bind(this, user, index)}>Support</p>
                      </div>
                  </div>
          })}
          </ul>
    </div>
  }
}

export default SingleUser;
