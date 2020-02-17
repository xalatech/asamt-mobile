import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ArtistList from '@components/ArtistList';
import * as S from './styled';

const Artists = (props) => {
  const { event, isLoading } = props;

  return (
    <S.ListContainer>
      <ArtistList
        data={event.programs}
        isLoading={isLoading}
        type="Artists"
      />
    </S.ListContainer>
  );
};

const mapStateToProps = ({ festival: { event, isLoading } }) => ({
  isLoading,
  event,
});

Artists.propTypes = {
  event: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, null)(Artists);
