import React from 'react';
import PropTypes from 'prop-types';
import ImageWithPlaceholder from '@components/core/ImageWithPlaceholder';
import notFoundImage from '@images/image-not-found.png';
import EventFooter from '../EventFooter';
import * as S from './styled';

const ImagePlaceholderStyle = {
  width: '100%',
  height: '100%',
};

const Event = props => (
  <S.Touchable
    isFirst={props.index === 0}
    onPress={() => props.onItemTap(props.type, props.item.id, props.item.title)}
  >
    <S.EventInfo>
      <S.Overlay />
      <ImageWithPlaceholder
        imgUrl={{ uri: props.item.coverImage }}
        defaultImg={notFoundImage}
        style={ImagePlaceholderStyle}
      />
      <S.EventFooter>
        <EventFooter type={props.type} item={props.item} />
      </S.EventFooter>
    </S.EventInfo>
  </S.Touchable>
);

Event.defaultProps = {
  type: 'Events',
};

Event.propTypes = {
  onItemTap: PropTypes.func.isRequired,
  type: PropTypes.string,
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default Event;
