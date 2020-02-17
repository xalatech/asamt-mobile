import moment from 'moment';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Linking, Platform, RefreshControl, Share } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { loadFestival } from '@redux/modules/festival';
import { handleDeepLinks } from '@helpers';

import Details from './Details';

import * as S from './styled';

class Festival extends Component {
  static navigatorStyle = {
    navBarButtonColor: '#FFFFFF',
    navBarTextColor: '#FFFFFF',
  }

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  componentDidMount() {
    this.props.loadFestival(this.props.festivalId);
  }

  onNavigatorEvent(event) {
    if (event.id === 'cancel') {
      return Navigation.dismissModal({ animationType: 'slide-down' });
    }

    return handleDeepLinks(event, this.props.navigator);
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

  openMap = ({ venue: { country, city, address } }) => {
    if (Platform.OS === 'ios') {
      Linking.openURL(`http://maps.apple.com/maps?q=${country} ${city} ${address}`);
      /* where saddr is start address and daddr is destination address lat+long */
    } else if (Platform.OS === 'android') {
      Linking.openURL(`https://maps.google.com/?q=${country} ${city} ${address}`);
      // Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${lat}${','}${long}`);
    }
  };

  openLink = (link) => {
    Linking.openURL(link);
  };

  handleRefreshing = () => {
    this.props.loadFestival(this.props.festivalId);
  };

  goTo = (screen, title) => {
    this.props.navigator.push({
      screen,
      title,
    });
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

  render() {
    return (
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
            onItemTap={this.goTo}
            shareEvent={this.shareEvent}
            authenticated={this.props.authenticated}
          />
        }
      </S.StyledScrollView>
    );
  }
}

Festival.propTypes = {
  loadFestival: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  event: PropTypes.any.isRequired,
  authenticated: PropTypes.bool.isRequired,
  festivalId: PropTypes.string.isRequired,
};

const mapStateToProps = ({ festival: { isLoading, event }, auth: { authenticated } }) => ({
  isLoading,
  event,
  authenticated,
});

const mapDispatchToProps = {
  loadFestival,
};

export default connect(mapStateToProps, mapDispatchToProps)(Festival);
