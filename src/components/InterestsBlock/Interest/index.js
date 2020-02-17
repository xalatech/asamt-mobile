import React from 'react';
import PropTypes from 'prop-types';

import check from '@images/Check.png';
import * as S from './styled';

const Interest = ({ item, index, onToggle }) => (
  <S.Interest onPress={() => onToggle(index, item)} isChecked={item.isChecked}>
    {item.isChecked ?
      <S.CheckWrapper>
        <S.Check source={check} />
      </S.CheckWrapper> :
      null
    }
    {item.icon ?
      <S.InterestIcon
        resizeMode="contain"
        source={{ uri: item.isChecked ? (item.iconHover || '') : (item.icon || '') }}
        isChecked={item.isChecked}
      />
      : null
    }
    <S.InterestName isChecked={item.isChecked}>
      {item.name}
    </S.InterestName>
  </S.Interest>
);

Interest.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Interest;
