import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import PhotoView from 'react-native-photo-view';

import * as S from './styled';

class FestivalMap extends Component {
  state = {
    loading: false,
    modalVisible: false,
  };

  handleModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };

  render() {
    if (!this.props.event) {
      return null;
    }

    const { loading } = this.state;
    const { mapImage } = this.props.event;

    return (
      <S.Wrapper>
        {loading ?
          <S.Loader>
            <ActivityIndicator color="#FF8300" />
          </S.Loader>
          : null
        }
        <PhotoView
          source={{ uri: encodeURI(mapImage) }}
          minimumZoomScale={1.0}
          maximumZoomScale={4.0}
          style={{ width: '100%', height: '100%' }}
          onLoadStart={() => this.setState({ loading: true })}
          onLoadEnd={() => this.setState({ loading: false })}
        />
        {/* <S.HintWrapper>
          <S.HintButtonWrapper>
            <S.HintButton onPress={this.handleModal}>
              <S.HintText>?</S.HintText>
            </S.HintButton>
          </S.HintButtonWrapper>
        </S.HintWrapper> */}
        <S.StyledModal
          animationType="fade"
          transparent
          visible={this.state.modalVisible}
          onRequestClose={this.handleModal}
        >
          <S.Overlay />
          <S.ModalWrapper>
            <S.ModalText>
              Legend
            </S.ModalText>
          </S.ModalWrapper>
        </S.StyledModal>
      </S.Wrapper>
    );
  }
}

FestivalMap.propTypes = {
  event: PropTypes.object.isRequired,
};

const mapStateToProps = ({ festival: { event, isLoading } }) => ({
  isLoading,
  event,
});

export default connect(mapStateToProps, null)(FestivalMap);
