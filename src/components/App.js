import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers, changeButtonTitle } from '../actions/index';

import Nav from './Nav';
import Users from './Users';

class App extends Component {

  componentDidMount () {
    this.props.getUsers();
  }

  users = () => {

    const group = [];

    this.props.users.forEach((user) => {
      if (this.props.buttonTitle === "All") {
        group.push(user);
      }
      if (user.group === this.props.buttonTitle) {
        group.push(user);
      }
    });

    return group;
  }

  render() {
    return <div>
      <header></header>
      <Nav changeButtonTitle={this.props.changeButtonTitle}/>
      <Users users={this.users()} buttonTitle={this.props.buttonTitle}/>
    </div>
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => dispatch(getUsers()),
        changeButtonTitle: (buttonName) => dispatch(changeButtonTitle(buttonName))
    };
};

const mapStateToProps = (state) => {
    return {
        users: state.data,
        buttonTitle: state.buttonTitle
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (App);
