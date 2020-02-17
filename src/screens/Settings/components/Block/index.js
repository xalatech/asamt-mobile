import React from 'react';
import PropTypes from 'prop-types';

import Setting from './components/Setting';
import * as S from './styled';
import { profile, account, notifications, privacy } from './config';

const Block = props => (
  <S.Container>
    <S.TitleContainer>
      <S.Title>{props.title}</S.Title>
    </S.TitleContainer>
    <S.Block>
      {props.profile && profile.map(field =>
      (
        <Setting key={field.text} text={field.text} />
      ))}
      {props.notifications && notifications.map(field =>
      (
        <Setting key={field.text} text={field.text} />
      ))}
      {props.account && account.map(field =>
      (
        <Setting key={field.text} text={field.text} />
      ))}
      {props.privacy && privacy.map(field =>
      (
        <Setting key={field.text} text={field.text} />
      ))}
      { !props.isLast && <S.Separator /> }
    </S.Block>
  </S.Container>
);

Block.propTypes = {
  title: PropTypes.string.isRequired,
  isLast: PropTypes.bool,
  profile: PropTypes.bool,
  account: PropTypes.bool,
  notifications: PropTypes.bool,
  privacy: PropTypes.bool,
};

Block.defaultProps = {
  isLast: false,
  profile: false,
  account: false,
  notifications: false,
  privacy: false,
};

export default Block;
