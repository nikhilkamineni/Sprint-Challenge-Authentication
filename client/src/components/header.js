import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const styles = {
  border: '1px solid black',
  width: '70%'
}

const ulStyles = {
  listStyleType: 'none',
  padding: '3px'
}

const liStyles = {
  padding: '5px',
  backgroundColor: 'green',
}

const linkStyles = {
  textDecoration: 'none',
  color: 'black'
}

class Header extends Component {
  getLinks() {
    if (this.props.authenticated) {
      return (
        <li style={liStyles}>
          <Link to="/signout" style={linkStyles}>Sign Out</Link>
        </li>
      );
    }
    return [
      <li key={1} style={liStyles}>
        <Link to="/signin" style={linkStyles}>SIGN IN</Link>
      </li>,
      <li key={2} style={liStyles}>
        <Link to="/signup" style={linkStyles}>SIGN UP</Link>
      </li>
    ];
  }

  render() {
    return (
      <div style={styles}>
        <Link to="/" style={linkStyles}>Jokes Home</Link>
        {!this.props.authenticated && <h2>Sign in for some awesome Jokezzz!</h2>}
        <ul style={ulStyles}>{this.getLinks()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  };
};

export default connect(mapStateToProps)(Header);
