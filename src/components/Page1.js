import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Page1 extends Component {

  render () {

    const user = Math.round(Math.random()*10);

    return <div>
      <h1>Page 1 </h1>
      <Link to='/'> Home </Link>
      <Link to={`/page1/${user}`}> | Page 1 User: {user} </Link>
    </div>
  }
}

export default Page1;
