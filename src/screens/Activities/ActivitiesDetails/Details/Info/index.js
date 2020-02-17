import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';
import Date from './Date';
import Location from './Location';
import Tickets from './Tickets';

const Info = props => (
  <S.InfoWrapper>
    <Location openMap={props.openMap} data={props.data} />
    <Date openCalendar={props.openCalendar} data={props.data} />
    <Tickets openLink={props.openLink} data={props.data} />
  </S.InfoWrapper>
);

Info.propTypes = {
  openMap: PropTypes.func.isRequired,
  openCalendar: PropTypes.func.isRequired,
  openLink: PropTypes.func.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    starting: PropTypes.string.isRequired,
    ticketURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default Info;
