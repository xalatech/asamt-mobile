import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Button = ({
  onPress, title, disabled, color,
}) => (
  <S.Btn disabled={disabled} onPress={onPress} color={color}>
    <S.TextBtn>
      {title}
    </S.TextBtn>
  </S.Btn>
);

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
};

Button.defaultProps = {
  disabled: false,
  color: false,
};
export default Button;
