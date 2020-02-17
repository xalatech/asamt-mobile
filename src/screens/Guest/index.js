import React, { Component } from 'react';
import { handleDeepLinks } from '@helpers';

import * as S from './styled';

class Guest extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    handleDeepLinks(event, this.props.navigator);
  }

  render() {
    return (
      <S.Wrapper>
        <S.StyledText>
          Du må logge inn for å bruke denne feeden.
        </S.StyledText>
      </S.Wrapper>
    );
  }
}

export default Guest;
