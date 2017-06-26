/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description Redux reducer "login".
 *
 * @description Responsible for maintaining information about the login call.
 *
 * initialState = {
 *   isFetching: false,
 *   error: null,
 * };
 *
 */

import {
  REQUEST_LOGIN_ACTION,
  REQUEST_LOGIN_SUCCESS,
  REQUEST_LOGIN_FAILURE,
} from '../actions/loginActions';

const initialState = {
  isFetching: false,
  error: null,
};

export default (reduxState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REQUEST_LOGIN_ACTION:
      return {
        ...reduxState,
        isFetching: true,
      };
    case REQUEST_LOGIN_SUCCESS:
      return {
        ...reduxState,
        isFetching: false,
      };
    case REQUEST_LOGIN_FAILURE:
      return {
        ...reduxState,
        isFetching: false,
        error: payload.error,
      };

    default:
      return reduxState;
  }
}
