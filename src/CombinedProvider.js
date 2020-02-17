import React from 'react';
import PropTypes from 'prop-types';
import { View, SafeAreaView, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import theme from './theme';

const style = {
  safe: {
    flex: 1,
  },
  view: {
    flex: 1,
  },
};

if (Platform.OS === 'ios') {
  style.safe.backgroundColor = theme.primaryOrange;
  style.view.backgroundColor = 'white';
}

const CombinedProvider = ({ children, store }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <SafeAreaView style={style.safe}>
        <View style={style.view}>
          {children}
        </View>
      </SafeAreaView>
    </ThemeProvider>
  </Provider>
);

CombinedProvider.propTypes = {
  children: PropTypes.node.isRequired,
  store: PropTypes.any.isRequired,
};

export default CombinedProvider;
