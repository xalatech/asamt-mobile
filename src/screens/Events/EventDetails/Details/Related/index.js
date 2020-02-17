import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';
import RelatedItem from './RelatedItem';

const Related = props => (
  <Fragment>
    <S.RelatedText>
          Related events
    </S.RelatedText>
    <S.HorizontalScrollView horizontal showsHorizontalScrollIndicator={false}>
      {props.data.map((item, index) => (
        <RelatedItem
          item={item}
          last={index === props.data.length - 1}
          onItemTap={props.onItemTap}
          key={item.title + item.id}
        />
          ))}
    </S.HorizontalScrollView>
  </Fragment>

);

Related.propTypes = {
  data: PropTypes.any.isRequired,
  onItemTap: PropTypes.func.isRequired,
};

export default Related;
