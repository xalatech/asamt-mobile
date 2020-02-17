import React from 'react';
import PropTypes from 'prop-types';

import check from '@images/Check.png';
import * as S from './styled';

const Category = ({ item, index, onToggle }) => (
  <S.Category onPress={() => onToggle(index, item)} isChecked={item.isChecked}>
    {item.isChecked ?
      <S.CheckWrapper>
        <S.Check source={check} />
      </S.CheckWrapper> :
      null
    }
    {item.icon ?
      <S.CategoryIcon
        resizeMode="contain"
        source={{ uri: item.isChecked ? (item.iconHover || '') : (item.icon || '') }}
        isChecked={item.isChecked}
      />
      : null
    }
    <S.CategoryName isChecked={item.isChecked}>
      {item.name}
    </S.CategoryName>
  </S.Category>
);

Category.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Category;
