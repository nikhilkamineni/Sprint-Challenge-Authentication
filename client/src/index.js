import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import styled from 'styled-components';
import SignIn from './components/signin';
import Jokes from './components/jokes';
import SignOut from './components/signout';
import SignUp from './components/signup';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

const ContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1000px;
  margin: 15px;
  background: #c9a700;
  border: 5px dashed red;
`

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <ContentStyled>
        <Route path="/" component={App} />
        <Route path="/signin" component={SignIn} />
        <Route path="/jokes" component={Jokes} />
        <Route path="/signout" component={SignOut} />
        <Route path="/signup" component={SignUp} />
      </ContentStyled>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
