/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description Redux actions. Contains sync action-creators and async actions using Redux-Thunk.
 *
 */

import { history } from '../../Routes';
import { post } from '../../../utilities/apiUtilities';

export const REQUEST_LOGIN_ACTION = 'REQUEST_LOGIN_ACTION';
export const REQUEST_LOGIN_SUCCESS = 'REQUEST_LOGIN_SUCCESS';
export const REQUEST_LOGIN_FAILURE = 'REQUEST_LOGIN_FAILURE';

const requestLoginAction = () => ({
  type: REQUEST_LOGIN_SUCCESS,
});

const requestLoginSuccess = access_token => ({
  type: REQUEST_LOGIN_SUCCESS,
  payload: {
    access_token,
  },
});

const requestLoginFailure = error => ({
  type: REQUEST_LOGIN_FAILURE,
  payload: {
    error,
  },
});

export const performLogin = (credentials) => {
  return (dispatch) => {
    dispatch(requestLoginAction());
    post('/users/authenticate', credentials)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        dispatch(requestLoginFailure(error));
      });
  };
};
