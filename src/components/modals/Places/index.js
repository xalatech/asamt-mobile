import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, PixelRatio } from 'react-native';
import { connect } from 'react-redux';

import GooglePlacesSearch from '@components/GooglePlacesSearch/index';
import { requestChangeRadius, geolocation, requestAccessDenied } from '@redux/modules/location';

import * as S from './styled';

const styles = {
  textInputContainer: {
    backgroundColor: 'transparent',
    borderRightWidth: 1 / PixelRatio.get(),
    borderLeftWidth: 1 / PixelRatio.get(),
    borderBottomWidth: 1,
    borderTopWidth: 1 / PixelRatio.get(),
    paddingLeft: 20,
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
  },
  description: {
    fontWeight: 'bold',
  },
  powered: {
    opacity: 0,
  },
};

class PlacesModal extends Component {
  static navigatorStyle = {
    statusBarColor: '#000000',
  }
  state = {
    value: this.props.radius,
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.props.geolocation({ coords: position.coords });
    }, () => {
      this.props.requestAccessDenied();
    });
  }
  closeModal = () => {
    if (this.state.value !== this.props.radius) {
      this.props.requestChangeRadius(this.state.value);
    }
    this.props.activeModal();
  };

  render() {
    return (
      <Modal
        transparent
        visible={this.props.visible}
        animationType="slide"
        onRequestClose={this.closeModal}
      >
        <S.ModalBackground>
          <S.Wrapper>
            <S.Header>
              <S.BackButton onPress={this.closeModal}>
                <S.BackIcon />
                <S.BackText>Tilbake</S.BackText>
              </S.BackButton>
              <S.TextWrapper>
                <S.SearchText>Søk</S.SearchText>
              </S.TextWrapper>
            </S.Header>
            <S.SliderWrapper>
              <S.StyledSlider
                value={this.state.value}
                onValueChange={value => this.setState({ value })}
                step={1}
                maximumValue={100}
                minimumValue={1}
                minimumTrackTintColor="#FF8300"
                maximumTrackTintColor="#FFE6CC"
                thumbTintColor="#FF8300"
              />
              <S.SliderValueText>Søkeradius: {this.state.value}km</S.SliderValueText>
            </S.SliderWrapper>
            <S.SearchWrapper>
              <GooglePlacesSearch
                onPress={this.closeModal}
                placeholder="Hvor?"
                autoFocus
                styles={styles}
              />
            </S.SearchWrapper>
          </S.Wrapper>
        </S.ModalBackground>
      </Modal>
    );
  }
}

PlacesModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  activeModal: PropTypes.func.isRequired,
  requestChangeRadius: PropTypes.func.isRequired,
  radius: PropTypes.number.isRequired,
  geolocation: PropTypes.func.isRequired,
  requestAccessDenied: PropTypes.func.isRequired,
};

const mapStateToProps = ({ location: { radius } }) => ({
  radius,
});

const mapDispatchToProps = {
  requestChangeRadius,
  geolocation,
  requestAccessDenied,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlacesModal);
