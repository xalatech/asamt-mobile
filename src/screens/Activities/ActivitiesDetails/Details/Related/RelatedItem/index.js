import React from 'react';
import PropTypes from 'prop-types';

import EventFooter from '@components/EventList/EventFooter';
import * as S from './styled';

const RelatedItem = props => (
  <S.ItemWrapper last={props.last}>
    <S.Touchable onPress={() => props.onItemTap(props.item.id)}>
      <S.EventInfo>
        <S.Overlay />
        <S.EventTittleImage source={{ uri: props.item.coverImage }} />
        <S.EventFooter>
          <EventFooter item={props.item} />
        </S.EventFooter>
      </S.EventInfo>
    </S.Touchable>
  </S.ItemWrapper>
);

RelatedItem.defaultProps = {
  coverImage: 'https://cdn.browshot.com/static/images/not-found.png',
};

RelatedItem.propTypes = {
  last: PropTypes.bool.isRequired,
  coverImage: PropTypes.string,
  item: PropTypes.any.isRequired,
  onItemTap: PropTypes.func.isRequired,
};

export default RelatedItem;
