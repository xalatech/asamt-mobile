import React from 'react';
import PropTypes from 'prop-types';
import { RefreshControl } from 'react-native';

import * as S from './styled';

const Results = props => (
  <S.StyledScrollView
    refreshControl={
      <RefreshControl
        enabled={false}
        refreshing={props.isLoading}
      />
    }
  >
    <S.ListWrapper>
      {props.data.map(item =>
        (
          <S.Item
            key={item.tittle}
          >
            <S.StyledText>{item.tittle}</S.StyledText>
            <S.StyledText>{item.place}</S.StyledText>
          </S.Item>
        ))}
    </S.ListWrapper>
  </S.StyledScrollView>
);

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.any.isRequired,
};

export default Results;
