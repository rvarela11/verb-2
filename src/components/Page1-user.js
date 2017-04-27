import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Page1User extends Component {

  render () {
    return <div>
      <h1> Page 1 User</h1>
      <Link to='/'> Home </Link>
      <Link to='/page1'> Page 1 </Link>
    </div>
  }
}

export default Page1User;
