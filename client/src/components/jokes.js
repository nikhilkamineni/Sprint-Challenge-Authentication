import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getJokes } from '../actions';

const styles = {
  width: '80%'
}

const jokeStyles = {
  border: '1px solid black',
  padding: '5px',
  margin: '5px',
  listStyleType: 'none',
};

const jokeSetupStyles = {
  fontWeight: 'bold'
}

const jokeTypeStyles = {
  fontSize: '10px'
}

class Jokes extends Component {
  componentDidMount() {
    this.props.getJokes();
    console.log(this.props);
  }

  render() {
    return (
      <ul style={styles}>
        {this.props.jokes.map((joke, i) => {
          return (
            <ul key={i} style={jokeStyles}>
              <li className="Joke-Setup" style={jokeSetupStyles}>{joke.setup}</li>
              <li className='Joke-Punchline'>{joke.punchline}</li>
              <li className='Joke-Type' style={jokeTypeStyles}>{joke.type}</li>
            </ul>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    jokes: state.jokes,
  };
};

export default connect(mapStateToProps, { getJokes })(Jokes);
