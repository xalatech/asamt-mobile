import moment from 'moment';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { connect } from 'react-redux';

import { requestSetDate } from '@redux/modules/date';
import mainTheme, { theme } from './config';

import * as S from './styled';

LocaleConfig.locales.nb = {
  monthNames: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
  monthNamesShort: 'jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
  dayNames: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
  dayNamesShort: 'sø._ma._ti._on._to._fr._lø.'.split('_'),
};

LocaleConfig.defaultLocale = 'nb';

class DatePicker extends Component {
  state = {
    selected: '',
  };

  onButtonPress = () => {
    if (this.state.selected === '') {
      this.props.requestSetDate(moment().format('L'));
    } else {
      this.props.requestSetDate(moment(this.state.selected, 'gggg-MM-DD').format('L'));
    }
    this.props.activeModal();
  }

  onDayPress = (day) => {
    this.setState({
      selected: day.dateString,
    });
  }

  render() {
    return (
      <Modal
        transparent
        animationType="none"
        onRequestClose={this.props.activeModal}
      >
        <S.ModalBackground>
          <S.Wrapper>
            <Calendar
              onDayPress={this.onDayPress}
              markedDates={{
              [this.state.selected]:
              { selected: true, selectedColor: mainTheme.primaryOrange },
              }}
              theme={theme}
              firstDay={1}
            />
            <S.Button onPress={this.onButtonPress}>
              <S.ButtonText>Show events</S.ButtonText>
            </S.Button>
            <S.CancelButton onPress={this.props.activeModal}>
              <S.CancelText>Cancel</S.CancelText>
            </S.CancelButton>
          </S.Wrapper>
        </S.ModalBackground>
      </Modal>
    );
  }
}

DatePicker.propTypes = {
  activeModal: PropTypes.func.isRequired,
  requestSetDate: PropTypes.func.isRequired,
};

const mapStateToProps = ({ date }) => ({
  error: date.error.message,
  loading: date.loading,
  date: date.date,
});

const mapDispatchToProps = {
  requestSetDate,
};

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker);
