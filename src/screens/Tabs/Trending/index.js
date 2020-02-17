import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TrendingEventsList from '@screens/Events/Trending';
import TrendingActivities from '@screens/Activities/Trending';
import FestivalsFeed from '@screens/Festivals/Feed';

const Trending = (props) => {
  switch (props.type) {
    case ('Events'):
    default:
      return (
        <TrendingEventsList {...props} />
      );
    case ('Festivals'):
      return (
        <FestivalsFeed {...props} />
      );
    case ('Activities'):
      return (
        <TrendingActivities {...props} />
      );
  }
};

Trending.propTypes = {
  type: PropTypes.string.isRequired,
};

const mapStateToProps = ({ feedSwitchNavBar: { type } }) => ({
  type,
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
