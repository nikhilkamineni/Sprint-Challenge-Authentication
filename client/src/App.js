import React, { Component } from 'react';
import Header from './components/header';
import styled from 'styled-components';

const AppStyled = styled.div`
  width: 100%;
`

class App extends Component {
  render() {
    return (
      <AppStyled className="App">
        <Header />
      </AppStyled>
    );
  }
}

export default App;
