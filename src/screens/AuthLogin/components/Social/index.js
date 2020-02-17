import React from 'react';
import PropTypes from 'prop-types';
import facebook from '@images/facebookIcon.png';
import google from '@images/googleIcon.png';

import * as S from './styled';

const Social = props => (
  <S.SocialView>
    <S.FacebookButton onPress={props.facebookLogin}>
      <S.Facebook source={facebook} />
      <S.AuthText>Facebook</S.AuthText>
    </S.FacebookButton>
    <S.GoogleButton onPress={props.googleLogin}>
      <S.Google source={google} />
      <S.AuthText>Google</S.AuthText>
    </S.GoogleButton>
  </S.SocialView>
);
export default Social;

Social.propTypes = {
  facebookLogin: PropTypes.func.isRequired,
  googleLogin: PropTypes.func.isRequired,
};
