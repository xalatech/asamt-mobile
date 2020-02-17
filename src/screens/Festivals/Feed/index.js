import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FeedList from '@components/FeedList';

import { fetchFestivals } from '@redux/modules/festivalsFeed';

import { handleDeepLinks } from '@helpers';

import * as S from './styled';

class FestivalFeed extends Component {
  static propTypes = {
    fetchFestivals: PropTypes.func.isRequired,
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

  render() {
    return (
      <Fragment>
        <S.ControlPanel>
          <S.ButtonsWrapper>
            <S.PanelButton first>
              <S.DatePickerText>2018</S.DatePickerText>
            </S.PanelButton>
            <S.PanelButton >
              <S.DatePickerText>
                Norway
              </S.DatePickerText>
            </S.PanelButton>
          </S.ButtonsWrapper>
        </S.ControlPanel>
        <FeedList
          type="Festivals"
          date={this.props.date}
          location={this.props.location}
          list={this.props.list}
          isLoading={this.props.isLoading}
          fetch={this.props.fetchFestivals}
          emptyListMessage="Festivaler ikke funnet. Vennligst endre dato eller sted og prøv igjen"
          navigator={this.props.navigator}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = ({
  festivalsFeed: { list, isLoading },
  location: { location },
  date: { date },
}) => ({
  isLoading,
  list,
  location,
  date,
});

const mapDispatchToProps = {
  fetchFestivals,
};

export default connect(mapStateToProps, mapDispatchToProps)(FestivalFeed);
