import React from 'react';
import { Linking } from 'react-native';

import * as S from './styled';

const TOS_URL = 'http://www.asamt.no/termsofuse';

const openTOS = () => Linking.openURL(TOS_URL);

const TOS = () => (
  <S.Wrapper>
    <S.Link onPress={openTOS}>
      <S.LinkText>
        Les brukervilkå
      </S.LinkText>
    </S.Link>
  </S.Wrapper>
);

export default TOS;
