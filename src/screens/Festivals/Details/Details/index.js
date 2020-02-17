import React from 'react';
import PropTypes from 'prop-types';

import Tittle from './Tittle';
import Description from './Description';
import Info from './Info';
import * as S from './styled';
import Location from './Location';
import Advertising from './Advertising';

const Details = props => (
  <S.Wrapper>
    <Tittle
      data={props.data}
      shareEvent={props.shareEvent}
      authenticated={props.authenticated}
    />
    <Info
      data={props.data}
      openCalendar={props.openCalendar}
      openLink={props.openLink}
      openMap={props.openMap}
      onItemTap={props.onItemTap}
    />
    <Location
      data={props.data}
      openMap={props.openMap}
    />
    <Description data={props.data} />
    <Advertising data={props.data.sponsors} />
  </S.Wrapper>
);

Details.propTypes = {
  openMap: PropTypes.func.isRequired,
  openCalendar: PropTypes.func.isRequired,
  openLink: PropTypes.func.isRequired,
  onItemTap: PropTypes.func.isRequired,
  shareEvent: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  authenticated: PropTypes.bool.isRequired,
};

export default Details;
