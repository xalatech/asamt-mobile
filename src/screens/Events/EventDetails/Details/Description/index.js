import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Description = props => (
  (props.data.description ?
    <S.Wrapper>
      <S.DescriptionText>{props.data.description}</S.DescriptionText>
    </S.Wrapper> :
    null
  )
);

Description.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string,
  }).isRequired,
};

export default Description;
