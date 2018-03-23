import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import JokesReducer from './jokes';
import AuthReducer from './auth';

const rootReducer = combineReducers({
  auth: AuthReducer,
  form: FormReducer,
  jokes: JokesReducer,
});

export default rootReducer;
