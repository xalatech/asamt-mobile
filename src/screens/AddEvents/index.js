import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Form, Field } from 'react-final-form';

import { View } from 'react-native';
import Button from '@components/core/Button';
import { submitEvent } from '@redux/modules/addEvents';

import { items } from './config';
import * as S from './styled';

class AddEvents extends Component {
  onSubmit = (values, resetForm) => {
    this.props.submitEvent(values);
    if (this.props.isPostSuccess) {
      resetForm();
    }
  };

  render() {
    return (
      <Form
        onSubmit={this.onSubmit}
        render={({ form, values }) => (
          <S.Wrapper>
            <S.Form>
              <S.FormScrollView>
                <S.InputsWrapper>
                  {items.map(item => (
                    <Field name={item.name} key={item.name}>
                      {({ input, meta }) => (
                        <View>
                          <S.Input type="text" {...input} placeholder={item.placeholder} />
                          {meta.touched && meta.error}
                        </View>
                      )}
                    </Field>
                  ))}
                </S.InputsWrapper>
                <Button onPress={() => this.onSubmit(values, form.reset)} title="Add Event" />
              </S.FormScrollView>
            </S.Form>
          </S.Wrapper>
        )}
      />
    );
  }
}

AddEvents.propTypes = {
  submitEvent: PropTypes.func.isRequired,
  isPostSuccess: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ addEvent: { isPostSuccess } }) => ({
  isPostSuccess,
});

const mapDispatchToProps = {
  submitEvent,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEvents);
