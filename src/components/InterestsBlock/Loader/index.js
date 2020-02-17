import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  ActivityIndicator,
} from 'react-native';

import { ModalBackground } from './styled';

const Loader = ({ loading }) => (
  <Modal
    transparent
    animationType="none"
    visible={loading}
    onRequestClose={() => { console.log('close modal'); }}
  >
    <ModalBackground>
      <ActivityIndicator
        animating={loading}
        color="#FF8300"
      />
    </ModalBackground>
  </Modal>
);

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Loader;
