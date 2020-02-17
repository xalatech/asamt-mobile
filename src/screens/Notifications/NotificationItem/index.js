import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const NotificationItem = (props) => {
  const { data } = props;
  return (
    <S.NotificationWrapper first={props.index === 0}>
      <S.ImageWrapper>
        <S.TitleImage
          source={{ uri: data.coverImage }}
        />
      </S.ImageWrapper>
      <S.TextWrapper>
        <S.TitleText>
          {data.title}
        </S.TitleText>
        <S.DateText>
          {data.starting}
        </S.DateText>
      </S.TextWrapper>
    </S.NotificationWrapper>
  );
};

NotificationItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    starting: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default NotificationItem;
