import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const EventFooter = props => (
  <Fragment>
    <S.EventDetailsWrapper>
      {props.type === 'Events' ?
        <S.Date>
          <S.DateText>{props.item.startingTime}</S.DateText>
        </S.Date>
        : null
      }
      {props.type === 'Festivals' ?
        <Fragment>
          <S.FestivalDate>
            <S.DateText>{props.item.starting}-{props.item.ending}</S.DateText>
          </S.FestivalDate>
        </Fragment>
        : null
      }
    </S.EventDetailsWrapper>
    <S.InformationBottom>
      <S.EventDetailsWrapper>
        <S.TextTittle numberOfLines={1} ellipsizeMode="tail">{props.item.title}</S.TextTittle>
        {
          props.item.venue ?
            <S.TextPlace numberOfLines={1} ellipsizeMode="tail">{props.item.venue.name}</S.TextPlace>
            :
            null
        }
      </S.EventDetailsWrapper>
      {props.item.category && props.item.category.icon ?
        <S.IconWrapper>
          <S.EventImage
            resizeMode="contain"
            source={{ uri: (props.item.category && props.item.category.icon) || '' }}
          />
        </S.IconWrapper>
        : null
      }
    </S.InformationBottom>
  </Fragment>
);

EventFooter.propTypes = {
  type: PropTypes.string.isRequired,
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    starting: PropTypes.string,
    ending: PropTypes.string,
    startingTime: PropTypes.string,
    venue: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    category: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
    ]),
  }).isRequired,
};

export default EventFooter;
