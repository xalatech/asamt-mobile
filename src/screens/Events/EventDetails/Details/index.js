import React from 'react';
import PropTypes from 'prop-types';

import Tittle from './Tittle';
import Description from './Description';
import Info from './Info';
// import Related from './Related';
import * as S from './styled';

const Details = props => (
  <S.Wrapper>
    <Tittle
      data={props.data}
      shareEvent={props.shareEvent}
      authenticated={props.authenticated}
      addEventToFavourite={props.addEventToFavourite}
      deleteEventFromFavourite={props.deleteEventFromFavourite}
    />
    <Info
      data={props.data}
      openCalendar={props.openCalendar}
      openLink={props.openLink}
      openMap={props.openMap}
    />
    <Description data={props.data} />
    {props.data.source ?
      <S.SourceWrapper>
        <S.Source>
          {`Arrangementet er hentet fra ${props.data.source}`}
        </S.Source>
      </S.SourceWrapper>
      : null
    }
    {/* <Related data={props.relatedData} onItemTap={props.openRelatedItem} /> */}
  </S.Wrapper>
);

Details.propTypes = {
  openMap: PropTypes.func.isRequired,
  openCalendar: PropTypes.func.isRequired,
  openLink: PropTypes.func.isRequired,
  shareEvent: PropTypes.func.isRequired,
  // openRelatedItem: PropTypes.func.isRequired,
  addEventToFavourite: PropTypes.func.isRequired,
  deleteEventFromFavourite: PropTypes.func.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    starting: PropTypes.string.isRequired,
    ticketURL: PropTypes.string.isRequired,
    description: PropTypes.string,
    source: PropTypes.string,
  }).isRequired,
  // relatedData: PropTypes.any.isRequired,
  authenticated: PropTypes.bool.isRequired,
};

export default Details;
