import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { handleDeepLinks } from '@helpers';

import FeedList from '@components/FeedList';

import { fetchSavedFestivals } from '@redux/modules/savedFestivals';

class SavedFestivals extends Component {
  static propTypes = {
    fetchSavedFestivals: PropTypes.func.isRequired,
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
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
        type={this.props.type}
        list={this.props.list}
        isLoading={this.props.isLoading}
        fetch={this.props.fetchSavedFestivals}
        navigator={this.props.navigator}
        emptyListMessage="Dine lagrede festivaler vil bli oppført her."
      />
    );
  }
}

const mapStateToProps = ({ savedFestivals: { list, isLoading } }) => ({
  isLoading,
  list,
});

const mapDispatchToProps = {
  fetchSavedFestivals,
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedFestivals);
