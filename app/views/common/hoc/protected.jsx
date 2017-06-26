/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


// Custom imports
import {
  isAuthenticated,
} from '../../../utilities/authUtilities';


/**
 * @description HOC to detect authentication status and route accordingly
 * Requires a user to be authenticated in order to access the component
 */
export default (BaseComponent) => {
  class Protected extends Component {
    componentWillMount() {
      isAuthenticated();
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.location !== this.props.location) {
        isAuthenticated();
      }
    }
    render() {
      return <BaseComponent {...this.props} />;
    }
  }


  Protected.propTypes = {
  };

  return withRouter(Protected);
};
