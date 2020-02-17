import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

import FeedList from '@components/FeedList';
import ControlPanel from '@components/ControlPanel';
import prev from '@images/events_dateShortCut/back.png';
import next from '@images/events_dateShortCut/next.png';


import { fetchEvents } from '@redux/modules/events';
import { requestFastChangeDate } from '@redux/modules/date';

import { handleDeepLinks } from '@helpers';

import * as S from './styled';

class Events extends Component {
  static propTypes = {
    fetchEvents: PropTypes.func.isRequired,
    requestFastChangeDate: PropTypes.func.isRequired,
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool.isRequired,
    location: PropTypes.any.isRequired,
    date: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    handleDeepLinks(event, this.props.navigator);
  }

  goToNextDay = () => {
    if (!this.props.isLoading) {
      this.props.requestFastChangeDate(moment(this.props.date, 'DD.MM.YYYY')
        .add(1, 'days')
        .format('L'));
    }
  };

  goToPrevDay = () => {
    if (!this.props.isLoading) {
      this.props.requestFastChangeDate(moment(this.props.date, 'DD.MM.YYYY')
        .subtract(1, 'days')
        .format('L'));
    }
  };

  render() {
    return (
      <Fragment>
        <ControlPanel
          date={this.props.date}
          location={this.props.location}
        />
        <S.Wrapper>
          <S.DateShortCutButtonWrapper onPress={this.goToPrevDay}>
            <S.ArrowImg source={prev} />
          </S.DateShortCutButtonWrapper>
          <FeedList
            type="Events"
            list={this.props.list}
            isLoading={this.props.isLoading}
            fetch={this.props.fetchEvents}
            emptyListMessage="Hendelser ikke funnet. Vennligst endre dato eller sted og prøv igjen"
            navigator={this.props.navigator}
            withControls
          />
          <S.DateShortCutButtonWrapper onPress={this.goToNextDay} >
            <S.ArrowImg source={next} />
          </S.DateShortCutButtonWrapper>
        </S.Wrapper>

      </Fragment>
    );
  }
}

const mapStateToProps = ({
  events: { list, isFeedLoading },
  location: { location },
  date: { date },
}) => ({
  isLoading: isFeedLoading,
  list,
  location,
  date,
});

const mapDispatchToProps = {
  fetchEvents,
  requestFastChangeDate,
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);
