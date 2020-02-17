import React from 'react';
import {
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

const DismissKeyboardHOC = Comp =>
  ({ children, ...props }) => ( // eslint-disable-line react/prop-types
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Comp {...props}>
        {children}
      </Comp>
    </TouchableWithoutFeedback>
  );


export default DismissKeyboardHOC;
