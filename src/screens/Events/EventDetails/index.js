import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { RefreshControl, Linking, Platform, Share } from 'react-native';
import moment from 'moment';

import {
  loadEvent,
  addToFavouriteRequest,
  removeFromFavouriteRequest,
} from '@redux/modules/eventDetails';
import { fetchRelatedEvents } from '@redux/modules/related';
import { handleDeepLinks } from '@helpers';

import Details from './Details';

import * as S from './styled';

class EventDetails extends Component {
  static propTypes = {
    loadEvent: PropTypes.func.isRequired,
    addToFavouriteRequest: PropTypes.func.isRequired,
    removeFromFavouriteRequest: PropTypes.func.isRequired,
    eventId: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    event: PropTypes.any.isRequired,
    authenticated: PropTypes.bool.isRequired,
    fetchRelatedEvents: PropTypes.func.isRequired,
    related: PropTypes.any.isRequired,
  };

  static navigatorButtons = {
    rightButtons: [
      {
        id: 'customSideMenu',
        icon: require('@images/navbar/hamburger.png'),
        systemItem: 'compose',
      },
    ],
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  componentDidMount() {
    this.props.loadEvent(this.props.eventId);
    this.props.fetchRelatedEvents();
  }

  onNavigatorEvent(event) {
    handleDeepLinks(event, this.props.navigator);
  }

  openCalendar = (date) => {
    if (Platform.OS === 'ios') {
      const referenceDate = moment.utc('2001-01-01');
      const selectedDate = moment(date, 'ddd, MMM Do, h:mm a, YYYY')
        .unix() - referenceDate.unix();
      Linking.openURL(`calshow:${selectedDate}`);
    } else if (Platform.OS === 'android') {
      const selectedDate = moment(date, 'ddd, MMM Do, h:mm a, YYYY')
        .valueOf();// milliseconds since epoch
      Linking.openURL(`content://com.android.calendar/time/${selectedDate}`);
    }
  };
  openMap = (lat, long) => {
    if (Platform.OS === 'ios') {
      Linking.openURL(`http://maps.apple.com/maps?daddr=${lat}${','}${long}`);
      /* where saddr is start address and daddr is destination address lat+long */
    } else if (Platform.OS === 'android') {
      Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${lat}${','}${long}`);
    }
  };

  openLink = (link) => {
    Linking.openURL(link);
  };

  handleRefreshing = () => {
    this.props.loadEvent(this.props.eventId);
  };

  shareEvent = () => {
    Share.share({
      message: this.props.event.ticketURL,
      title: this.props.event.title,
    }, {
      // Android only:
      dialogTitle: 'Del hendelsen',
    });
  };

  goToEvent = (id) => {
    this.props.navigator.push({
      screen: 'Event',
      passProps: { eventId: id },
      title: '',
      animationType: 'slide-horizontal',
    });
  };

  addEventToFavourite = () => {
    this.props.addToFavouriteRequest(this.props.eventId);
  };

  deleteEventFromFavourite= () => {
    this.props.removeFromFavouriteRequest(this.props.eventId);
  };

  render() {
    return (
      <S.Wrapper>
        <S.StyledScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.props.isLoading}
              onRefresh={this.handleRefreshing}
            />
          }
        >
          {!this.props.isLoading && this.props.event.id &&
          <Details
            openCalendar={this.openCalendar}
            data={this.props.event}
            openMap={this.openMap}
            openLink={this.openLink}
            shareEvent={this.shareEvent}
            authenticated={this.props.authenticated}
            relatedData={this.props.related}
            fetchRelatedEvents={this.props.fetchRelatedEvents}
            openRelatedItem={this.goToEvent}
            addEventToFavourite={this.addEventToFavourite}
            deleteEventFromFavourite={this.deleteEventFromFavourite}
          />}
        </S.StyledScrollView>
      </S.Wrapper>
    );
  }
}


const mapStateToProps =
  ({ eventDetails: { event, isLoading }, auth: { authenticated }, related }) =>
    ({
      isLoading,
      event,
      authenticated,
      related: related.list,
    });

const mapDispatchToProps = {
  loadEvent,
  fetchRelatedEvents,
  addToFavouriteRequest,
  removeFromFavouriteRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails);
