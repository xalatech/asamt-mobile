import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { handleDeepLinks } from '@helpers';

import FeedList from '@components/FeedList';

import { fetchSuggestedActivities } from '@redux/modules/activities';

class SuggestedActivities extends Component {
  static propTypes = {
    fetchSuggestedActivities: PropTypes.func.isRequired,
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    handleDeepLinks(event, this.props.navigator);
  }

  render() {
    return (
      <FeedList
        list={this.props.list}
        isLoading={this.props.isLoading}
        fetch={this.props.fetchSuggestedActivities}
        navigator={this.props.navigator}
        emptyListMessage="Dine forslag vil bli oppført her"
      />
    );
  }
}

const mapStateToProps = ({ events: { suggested, isLoading } }) => ({
  isLoading,
  list: suggested,
});

const mapDispatchToProps = {
  fetchSuggestedActivities,
};

export default connect(mapStateToProps, mapDispatchToProps)(SuggestedActivities);
