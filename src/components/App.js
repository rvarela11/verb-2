import React, { Component } from 'react';
import { connect } from 'react-redux';
import { plus, minus } from '../actions/index';

class App extends Component {

  render() {
    return <div className="mainContainer">
      <h2 className="topContainer">{this.props.number}</h2>

      <div className="bottomContainer">
        <h2 onClick={this.props.plus}>Plus</h2>
        <h2 onClick={this.props.minus}>Minus</h2>
      </div>
    </div>
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        plus: () => dispatch(plus()),
        minus: () => dispatch(minus()),
    };
};

const mapStateToProps = (state) => {
    return {
        number: state
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (App);
