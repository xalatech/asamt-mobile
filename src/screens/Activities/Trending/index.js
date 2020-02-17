import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { handleDeepLinks } from '@helpers';

import FeedList from '@components/FeedList';

import { fetchTrendingActivities } from '@redux/modules/activities';

class TrendingActivities extends Component {
  static propTypes = {
    fetchTrendingActivities: PropTypes.func.isRequired,
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
        fetch={this.props.fetchTrendingActivities}
        navigator={this.props.navigator}
        emptyListMessage="Trending hendelser vil bli oppført her"
      />
    );
  }
}

const mapStateToProps = ({ events: { trending, isLoading } }) => ({
  isLoading,
  list: trending,
});

const mapDispatchToProps = {
  fetchTrendingActivities,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrendingActivities);
