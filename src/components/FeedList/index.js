import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import EventsList from '@components/EventList';

import * as S from './styled';

class FeedList extends Component {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool.isRequired,
    emptyListMessage: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    withControls: PropTypes.bool,
  };

  static defaultProps = {
    withControls: false,
  };

  componentDidMount() {
    this.props.fetch();
  }

  goTo = (type, id, title) => {
    switch (type) {
      case 'Events':
      default:
        return this.goToEvent(id, title);
      case 'Activities':
        return this.goToActivity(id, title);
      case 'Festivals':
        return this.goToFestival(id, title);
    }
  };

  goToEvent = (id, title) => {
    this.props.navigator.push({
      screen: 'Event',
      passProps: { eventId: id },
      title,
    });
  };

  goToActivity = (id, title) => {
    this.props.navigator.push({
      screen: 'Activity',
      passProps: { eventId: id },
      title,
    });
  };

  goToFestival = (id, title) => {
    this.props.navigator.push({
      screen: 'Festival.Details',
      passProps: { festivalId: id },
      title,
    });
  };

  render() {
    const {
      list,
      isLoading,
      emptyListMessage,
      fetch,
      type,
    } = this.props;

    return (
      <S.Container>
        <S.Wrapper controls={this.props.withControls}>
          <EventsList
            type={type}
            data={list}
            refreshing={isLoading}
            onRefresh={fetch}
            onItemTap={this.goTo}
            emptyListMessage={emptyListMessage}
          />
        </S.Wrapper>
      </S.Container>
    );
  }
}

const mapStateToProps = ({ feedSwitchNavBar: { type } }) => ({
  type,
});

export default connect(mapStateToProps, null)(FeedList);
