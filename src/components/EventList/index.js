import React from 'react';
import PropTypes from 'prop-types';
import { Platform } from 'react-native';

import * as S from './styled';
import EmptyList from './EmptyList';
import Event from './Event';

const isAndroid = Platform.OS === 'android';
const getItemLayout = (data, index) => ({ length: 165, offset: 165 * index, index });

const EventsList = ({
  refreshing,
  type,
  data,
  emptyListMessage,
  onItemTap,
  onRefresh,
}) => (
  <S.StyledFlatList
    data={data}
    getItemLayout={getItemLayout}
    showsVerticalScrollIndicator={false}
    refreshing={refreshing}
    onRefresh={onRefresh}
    removeClippedSubviews={isAndroid}
    ListEmptyComponent={() => {
      if (refreshing) {
        return null;
      }

      return <EmptyList message={emptyListMessage} />;
    }}
    keyExtractor={item => item.id}
    renderItem={({ item, index }) =>
      <Event item={item} index={index} type={type} onItemTap={onItemTap} />
    }
  />
);

EventsList.defaultProps = {
  type: 'Events',
};

EventsList.propTypes = {
  onItemTap: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  refreshing: PropTypes.bool.isRequired,
  onRefresh: PropTypes.any.isRequired,
  emptyListMessage: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default EventsList;
