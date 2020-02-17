import find from 'lodash/find';
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestChangeType } from '@redux/modules/feedSwitchNavBar';
import { TouchableWithoutFeedback } from 'react-native';

import arrowDown from '@images/arrowDown.png';

import { items } from './config';

import * as S from './styled';

class FeedSwitchNavBar extends Component {
  static propTypes = {
    requestChangeType: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
  };

  state = {
    modalVisible: false,
  }

  toggleModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  changeType = (type) => {
    this.toggleModal();

    if (this.props.type !== type) {
      this.props.requestChangeType(type);
    }
  }

  render() {
    const { type } = this.props;
    const { modalVisible } = this.state;
    const activeItem = find(items, { value: type });
    return (
      <Fragment>
        <S.Wrapper>
          <S.TouchableTabBar onPress={this.toggleModal}>
            <S.TouchableText >
              {activeItem.title}
            </S.TouchableText>
            <S.ArrowDownWrapper>
              <S.ArrowDown rotate={modalVisible} source={arrowDown} />
            </S.ArrowDownWrapper>
          </S.TouchableTabBar>
        </S.Wrapper>
        <S.StyledModal
          animationType="fade"
          transparent
          visible={this.state.modalVisible}
          onRequestClose={this.toggleModal}
        >
          <TouchableWithoutFeedback onPress={this.toggleModal}>
            <S.Overlay />
          </TouchableWithoutFeedback>
          <S.ModalWrapper>
            {items.map(item => (
              <S.TouchableItemChoose
                key={item.title}
                onPress={() => this.changeType(item.value)}
              >
                <S.ItemText>
                  {item.title}
                </S.ItemText>
              </S.TouchableItemChoose>
            ))}
          </S.ModalWrapper>
        </S.StyledModal>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ feedSwitchNavBar: { type } }) => ({
  type,
});

const mapDispatchToProps = {
  requestChangeType,
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedSwitchNavBar);
