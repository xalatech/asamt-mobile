import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import arrowIcon from '@images/arraw.png';

import * as S from './styled';
import Tickets from './Tickets';
import { items } from './config';

const Info = props => (
  <Fragment>
    <S.InfoWrapper>
      {items.map((item, index) => (
        <S.InlineDetailsWrapper last={index === items.length - 1} key={item.title}>
          <S.Details>
            <S.IconWrapper>
              <S.Icon source={item.icon} />
            </S.IconWrapper>
            <S.LinkWrapper onPress={() => props.onItemTap(item.screen, item.title)}>
              <S.InfoText>{item.title}</S.InfoText>
              <S.Icon source={arrowIcon} />
            </S.LinkWrapper>
          </S.Details>
        </S.InlineDetailsWrapper>
      ))}
    </S.InfoWrapper>
    <Tickets openLink={props.openLink} data={props.data} />
  </Fragment>
);

Info.propTypes = {
  openLink: PropTypes.func.isRequired,
  data: PropTypes.shape({
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    starting: PropTypes.string.isRequired,
    ticketURL: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Info;
