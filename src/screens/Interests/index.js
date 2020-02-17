import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';

import { handleDeepLinks } from '@helpers';

import InterestsBlock from '@components/InterestsBlock';

import * as S from './styled';

class Interests extends Component {
  static navigatorStyle = {
    tabBarHidden: true,
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.id === 'cancel') {
      return Navigation.dismissModal({ animationType: 'slide-down' });
    }

    return handleDeepLinks(event, this.props.navigator);
  }

  render() {
    return (
      <S.Wrapper>
        <S.ScrollViewWrapper>
          <S.StyledScrollView showsVerticalScrollIndicator={false}>
            <InterestsBlock />
          </S.StyledScrollView>
        </S.ScrollViewWrapper>
      </S.Wrapper>
    );
  }
}

export default Interests;
