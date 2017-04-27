import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './components/App'
import Page1 from './components/Page1';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/page1" component={Page1} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
