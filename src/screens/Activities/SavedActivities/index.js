import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { handleDeepLinks } from '@helpers';

import FeedList from '@components/FeedList';

import { fetchSavedEvents } from '@redux/modules/savedEvents';

class SavedActivities extends Component {
  static propTypes = {
    fetchSavedEvents: PropTypes.func.isRequired,
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
        fetch={this.props.fetchSavedEvents}
        navigator={this.props.navigator}
        emptyListMessage="Alle lagrede hendelser vil bli oppført her"
      />
    );
  }
}

const mapStateToProps = ({ savedEvents: { list, isLoading } }) => ({
  isLoading,
  list,
});

const mapDispatchToProps = {
  fetchSavedEvents,
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedActivities);
