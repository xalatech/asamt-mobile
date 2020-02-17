import React from 'react';
import PropTypes from 'prop-types';

import { InputArea } from './styled';

const Input = (props) => {
  const {
    field,
    placeholder,
    secureTextEntry,
    value,
    keyboardType,
  } = props;

  return (
    <InputArea
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      value={value}
      underlineColorAndroid="transparent"
      keyboardType={keyboardType}
      autocorrect={false}
      onChangeText={text => props.onInputChange(field, text)}
    />
  );
};

Input.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool,
  value: PropTypes.string.isRequired,
  keyboardType: PropTypes.string,
  field: PropTypes.string.isRequired,
};

Input.defaultProps = {
  secureTextEntry: false,
  keyboardType: 'default',
};

export default Input;
