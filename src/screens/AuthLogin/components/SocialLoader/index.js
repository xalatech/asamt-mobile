import React from 'react';
import { ActivityIndicator } from 'react-native';

import { ActivityIndicatorWrapper } from './styled';

const Loader = () => (
  <ActivityIndicatorWrapper>
    <ActivityIndicator
      size="large"
      color="#038999"
    />
  </ActivityIndicatorWrapper>
);

export default Loader;
