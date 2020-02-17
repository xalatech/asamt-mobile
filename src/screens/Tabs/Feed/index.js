import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FestivalsFeed from '@screens/Festivals/Feed';
import Events from '../../Events/Events';
import Activities from '../../Activities/Activities';

class Feed extends Component {
  static navigatorStyle = {
    navBarCustomView: 'FeedSwitchNavBar',
    navBarComponentAlignment: 'center',
  };

  componentWillReceiveProps(nextProps) {
    const { shouldRedirectToLogin } = this.props;
    if (nextProps.shouldRedirectToLogin && !shouldRedirectToLogin) {
      this.props.navigator.resetTo({
        screen: 'AuthLogin',
        title: '',
      });
    }
  }

  render() {
    switch (this.props.type) {
      case 'Events':
      default:
        return (
          <Events {...this.props} />
        );
      case 'Festivals':
        return (
          <FestivalsFeed {...this.props} />
        );
      case 'Activities':
        return (
          <Activities {...this.props} />
        );
    }
  }
}

Feed.propTypes = {
  type: PropTypes.string.isRequired,
  shouldRedirectToLogin: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ feedSwitchNavBar: { type }, auth: { shouldRedirectToLogin } }) => ({
  type,
  shouldRedirectToLogin,
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
