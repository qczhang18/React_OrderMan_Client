/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description This file is meant to create the rootReducer for our Redux store.
 *
 * @description We'll use the 'combineReducers' function exported from the 'redux' package.
 *
 * @description We'll configure rootReducer with some default reducers:
 *      routerReducer from 'react-router-redux'
 *      formReducer from 'redux-form'
 *
 * @exports The rootReducer
 */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import signupReducer from '../views/Unauthenticated/reducers/signupReducer';

const appReducer = combineReducers({
  form: formReducer,
  routing: routerReducer,
  signup: signupReducer,
});

export default (state, action) => appReducer(state, action);
