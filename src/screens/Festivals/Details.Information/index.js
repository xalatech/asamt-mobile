import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as S from './styled';

const Information = ({ event: { Praksisinfo } }) => (
  <S.Wrapper>
    <S.Text>{Praksisinfo.replace(/<br\/>/g, '\n')}</S.Text>
  </S.Wrapper>
);

Information.propTypes = {
  event: PropTypes.object.isRequired,
};

const mapStateToProps = ({ festival: { event, isLoading } }) => ({
  isLoading,
  event,
});

export default connect(mapStateToProps, null)(Information);
