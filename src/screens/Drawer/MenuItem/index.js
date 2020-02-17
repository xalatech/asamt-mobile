import React from 'react';
import PropTypes from 'prop-types';

import arrowIcon from '@images/arraw.png';
import * as S from './styled';

const MenuItem = props => (
  <S.StyledTouchableOpacity onPress={() => props.onItemTap(props.item.screen)}>
    <S.ItemWrapper>
      <S.IconItem source={props.item.icon} />
      <S.DrawerText>
        {props.item.tittle}
      </S.DrawerText>
    </S.ItemWrapper>
    <S.IconArrow source={arrowIcon} />
  </S.StyledTouchableOpacity>
);

MenuItem.propTypes = {
  onItemTap: PropTypes.func.isRequired,
  item: PropTypes.shape({
    screen: PropTypes.string.isRequired,
    tittle: PropTypes.string.isRequired,
    icon: PropTypes.any.isRequired,
  }).isRequired,
};

export default MenuItem;
