import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SuggestionsList from '@screens/Events/Suggestions';
import SuggestedActivities from '@screens/Activities/Suggestions';
import FestivalsFeed from '@screens/Festivals/Feed';

const Suggestions = (props) => {
  switch (props.type) {
    case ('Events'):
    default:
      return (
        <SuggestionsList {...props} />
      );
    case ('Festivals'):
      return (
        <FestivalsFeed {...props} />
      );
    case ('Activities'):
      return (
        <SuggestedActivities {...props} />
      );
  }
};

Suggestions.propTypes = {
  type: PropTypes.string.isRequired,
};

const mapStateToProps = ({ feedSwitchNavBar: { type } }) => ({
  type,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Suggestions);
