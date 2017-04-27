import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './components/App'
import Page1 from './components/Page1';
import Page1User from './components/Page1-user';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

const Page1Split = () => (
  <Switch>
    <Route exact path="/page1" component={Page1} />
    <Route path="/page1/user" component={Page1User} />
  </Switch>
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/page1" component={Page1Split} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
