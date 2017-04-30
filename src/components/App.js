import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers, changeButtonTitle, singleUser, changeUserGroup } from '../actions/index';

import Nav from './Nav';
import Users from './Users';
import SingleUser from './SingleUser';
import Search from './Search';

class App extends Component {

  componentDidMount () {
    //function to get the array with all the users data
    this.props.getUsers();
  }

  // The Users and the SingleUser components share the same space on the webpage.
  // To display the proper component information there is a passkey.

  users = () => {

    let group = [];

    if (this.props.passkey === "Button") {
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
    if (this.props.passkey === "Single") {
      group = [];
      return group;
    }
  }

  single = () => {

    let single = [];

    if (this.props.passkey === "Single") {
      single.push(this.props.single);
      return single;
    }
    if (this.props.passkey === "Button") {
      single = [];
      return single;
    }

  }

  render() {
    return <div>
      <header></header>
      <Nav changeButtonTitle={this.props.changeButtonTitle} passkey={this.props.passkey}/>
      <Search data={this.props.users} singleUser={this.props.singleUser}/>
      <Users users={this.users()} buttonTitle={this.props.buttonTitle} singleUser={this.props.singleUser}/>
      <SingleUser changeUserGroup={this.props.changeUserGroup} allData={this.props.users} single={this.single()}/>
    </div>
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => dispatch(getUsers()),
        changeButtonTitle: (buttonName) => dispatch(changeButtonTitle(buttonName)),
        singleUser: (user) => dispatch(singleUser(user)),
        changeUserGroup: (data) => dispatch(changeUserGroup(data))
    };
};

const mapStateToProps = (state) => {
    return {
        users: state.data,
        single: state.singleData,
        buttonTitle: state.buttonTitle,
        passkey: state.passkey,
        state,
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (App);
