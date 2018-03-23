import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderStyled = styled.div`
  border: 1px solid black;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

class Header extends Component {
  getLinks() {
    if (this.props.authenticated) {
      return (
        <li>
          <Link to="/signout">Sign Out</Link>
        </li>
      );
    }
    return [
      <li key={1}>
        <Link to="/signin">SIGN IN</Link>
      </li>,
      <li key={2}>
        <Link to="/signup">SIGN UP</Link>
      </li>
    ];
  }

  render() {
    return (
      <HeaderStyled>
        <Link to="/">Jokes Home</Link>
        {!this.props.authenticated && <h2>Sign in for some awesome Jokezzz!</h2>}
        <ul>{this.getLinks()}</ul>
      </HeaderStyled>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  };
};

export default connect(mapStateToProps)(Header);
