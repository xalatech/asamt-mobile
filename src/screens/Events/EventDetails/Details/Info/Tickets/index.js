import React from 'react';
import PropTypes from 'prop-types';
import ticketsIcon from '@images/ticketsIcon.png';
import arrowIcon from '@images/arraw.png';

import * as S from './styled';

const Tickets = props => (
  <S.InlineDetailsWrapper>
    <S.Details>
      <S.IconWrapper>
        <S.Icon source={ticketsIcon} />
      </S.IconWrapper>
      <S.LinkWrapper onPress={() => props.openLink(props.data.ticketURL)}>
        <S.InfoText>Kjøp billetter</S.InfoText>
        <S.Icon source={arrowIcon} />
      </S.LinkWrapper>
    </S.Details>
  </S.InlineDetailsWrapper>
);

Tickets.propTypes = {

  openLink: PropTypes.func.isRequired,
  data: PropTypes.shape({
    ticketURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default Tickets;
