import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FeedList from '@components/FeedList';

import { fetchActivities } from '@redux/modules/activities';

import { handleDeepLinks } from '@helpers';

class Activities extends Component {
  static propTypes = {
    fetchActivities: PropTypes.func.isRequired,
    activities: PropTypes.arrayOf(PropTypes.object).isRequired,
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
        // type="Activities"
        list={this.props.activities}
        isLoading={this.props.isLoading}
        fetch={this.props.fetchActivities}
        emptyListMessage="Aktiviteter ikke funnet. Vennligst endre dato eller sted og prøv igjen"
        navigator={this.props.navigator}
      />
    );
  }
}

const mapStateToProps = ({
  activities: { activities, isLoading },
}) => ({
  isLoading,
  activities,
});

const mapDispatchToProps = {
  fetchActivities,
};

export default connect(mapStateToProps, mapDispatchToProps)(Activities);
