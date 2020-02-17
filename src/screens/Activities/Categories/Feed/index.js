import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import EventsList from '@components/EventList';
import intersect from '@images/Intersect.png';
import * as S from './styled';

const Feed = props => (
  <Fragment>
    <S.ControlPanel>
      <S.ButtonsWrapper>
        <S.PanelButton onPress={props.showCategory}>
          <S.DatePickerText>Endre kategori</S.DatePickerText>
          <S.Arrow source={intersect} />
        </S.PanelButton>
      </S.ButtonsWrapper>
    </S.ControlPanel>
    <S.Wrapper>
      <EventsList
        data={props.data}
        refreshing={props.refreshing}
        onRefresh={props.handleRefreshing}
        onItemTap={props.onItemTap}
        emptyListMessage="Hendelser ikke funnet. Vennligst, endre kategorier"
      />
    </S.Wrapper>
  </Fragment>

);

Feed.propTypes = {
  showCategory: PropTypes.func.isRequired,
  data: PropTypes.any.isRequired,
  refreshing: PropTypes.bool.isRequired,
  handleRefreshing: PropTypes.func.isRequired,
  onItemTap: PropTypes.func.isRequired,
};

export default Feed;
