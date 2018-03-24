import axios from 'axios';

axios.defaults.withCredentials = true;

const ROOT_URL = 'http://localhost:5000/api';

export const USER_REGISTERED = 'USER_REGISTERED';
export const USER_AUTHENTICATED = 'USER_AUTHENTICATED';
export const USER_UNAUTHENTICATED = 'USER_UNAUTHENTICATED';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const GET_JOKES = 'GET_JOKES';
export const CHECK_IF_AUTHENTICATED = 'CHECK_IF_AUTHENTICATED';

export const authError = error => {
  console.log('Auth Error');
  return {
    type: AUTHENTICATION_ERROR,
    payload: error,
  };
};

export const register = (username, password, confirmPassword, history) => {
  return dispatch => {
    if (password !== confirmPassword) {
      dispatch(authError('Passwords do not match'));
      return;
    }
    axios
      .post(`${ROOT_URL}/users`, { username, password })
      .then(() => {
        dispatch({
          type: USER_REGISTERED,
        });
        history.push('/signin');
      })
      .catch((err) => {
        console.log(err)
        dispatch(authError('Failed to register user'));
      });
  };
};

export const login = (username, password, history) => {
  return dispatch => {
    axios
      .post(`${ROOT_URL}/login`, { username, password })
      .then(res => {
        localStorage.setItem('token', res.data.token);
        dispatch({
          type: USER_AUTHENTICATED,
        });
        history.push('/jokes');
      })
      .catch(() => {
        dispatch(authError('Incorrect username/password combo'));
      });
  };
};

export const logout = () => {
  return dispatch => {
    localStorage.removeItem('token');
    dispatch({
      type: USER_UNAUTHENTICATED,
    });
  };
};


export const getJokes = () => {
  const token = localStorage.getItem('token');
  const header = { headers: { Authorization: token } };
  return dispatch => {
    axios
      .get(`${ROOT_URL}/jokes`, header)
      .then(response => {
        dispatch({
          type: GET_JOKES,
          payload: response.data,
        });
      })
      .catch(() => {
        dispatch(authError('Failed to fetch jokes'));
      });
  };
};
