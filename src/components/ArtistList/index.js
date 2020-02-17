import React from 'react';
import PropTypes from 'prop-types';
import { Platform } from 'react-native';

import * as S from './styled';
import Artist from './Artist';

const isAndroid = Platform.OS === 'android';
const getItemLayout = (data, index) => ({ length: 80, offset: 80 * index, index });

const ArtistList = props => (
  <S.ListContainer>
    <S.ArtistList
      data={props.data}
      removeClippedSubviews={isAndroid}
      getItemLayout={getItemLayout}
      showsVerticalScrollIndicator={false}
      refreshing={props.isLoading}
      keyExtractor={item => `${item.id}`}
      renderItem={({ item, index }) => (
        <Artist item={item} index={index} {...props} />
      )}
    />
  </S.ListContainer>
);

ArtistList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
};

export default ArtistList;
