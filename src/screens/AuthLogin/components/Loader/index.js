import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  ActivityIndicator,
} from 'react-native';

import { ModalBackground, ActivityIndicatorWrapper } from './styled';

const Loader = (props) => {
  const {
    loading,
  } = props;

  return (
    <Modal
      transparent
      animationType="none"
      visible={loading}
      onRequestClose={() => { console.log('close modal'); }}
    >
      <ModalBackground>
        <ActivityIndicatorWrapper>
          <ActivityIndicator
            animating={loading}
            color="#038999"
          />
        </ActivityIndicatorWrapper>
      </ModalBackground>
    </Modal>
  );
};

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Loader;
