import moment from 'moment';
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import dateIcon from '@images/dateIcon.png';
import placeIcon from '@images/placeIcon.png';
import DatePicker from '@components/modals/DatePicker';
import PlacesModal from '@components/modals/Places';
import intersect from '@images/Intersect.png';

import * as S from './styled';

class ControlPanel extends Component {
  state = {
    activeModalCalendar: false,
    activeModalPlaces: false,
  };

  activeModalCalendar = () => {
    this.setState({ activeModalCalendar: !this.state.activeModalCalendar });
  };

  activeModalPlaces = () => {
    this.setState({ activeModalPlaces: !this.state.activeModalPlaces });
  };

  render() {
    const location = this.props.location.vicinity;
    const { date } = this.props;
    const { activeModalCalendar } = this.state;

    return (
      <Fragment>
        <S.ControlPanel>
          <S.ButtonsWrapper>
            <S.PanelButton first onPress={this.activeModalCalendar}>
              <S.Icon source={dateIcon} />
              <S.DatePickerText>{moment(date, 'DD.MM.YYYY').format('Do MMM.')}</S.DatePickerText>
              <S.Arrow source={intersect} />
            </S.PanelButton>
            <S.PanelButton onPress={this.activeModalPlaces}>
              <S.Icon source={placeIcon} />
              <S.DatePickerText>
                {location || 'Din posisjon'}
              </S.DatePickerText>
              <S.Arrow source={intersect} />
            </S.PanelButton>
          </S.ButtonsWrapper>
        </S.ControlPanel>
        {activeModalCalendar && <DatePicker activeModal={this.activeModalCalendar} />}
        <PlacesModal
          activeModal={this.activeModalPlaces}
          visible={this.state.activeModalPlaces}
        />
      </Fragment>
    );
  }
}

ControlPanel.propTypes = {
  location: PropTypes.any.isRequired,
  date: PropTypes.string.isRequired,
};

export default ControlPanel;
