import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const List = ({ title, data }) => {
  console.log(data);
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      {data.map(item => (
        <S.Item>
          <S.ItemTitle>{item.name}</S.ItemTitle>
          <S.ItemDietary>{item.dietaryInformation}</S.ItemDietary>
          <S.ItemPrice>{item.price}</S.ItemPrice>
        </S.Item>
      ))}
    </S.Wrapper>
  );
};

List.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default List;
