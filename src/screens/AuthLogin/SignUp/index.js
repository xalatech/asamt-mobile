import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CheckBox from 'react-native-check-box';

import { requestSignUp } from '@redux/modules/auth';

import Button from '@components/core/Button';
import * as S from './styled';

import TOS from './TOS';
import Loader from '../components/Loader';
import Social from '../components/Social';
import Input from '../components/Input';

class SignUp extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    actions: PropTypes.shape({
      requestSignUp: PropTypes.func.isRequired,
    }).isRequired,
    error: PropTypes.object,
    facebookLogin: PropTypes.func.isRequired,
    googleLogin: PropTypes.func.isRequired,
  }

  static defaultProps = {
    error: {},
  }

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    tosAccepted: false,
  }

  onTermsToggle = () => {
    this.setState(({ tosAccepted }) => ({ tosAccepted: !tosAccepted }));
  }

  onSignUpPress = () => {
    if (!this.validate()) {
      const {
        firstName, lastName, email, password,
      } = this.state;
      const credentials = {
        firstName,
        lastName,
        email,
        password,
      };
      this.props.actions.requestSignUp(credentials);
    }
  }

  validate = () => {
    if (this.state.email &&
        this.state.password &&
        this.state.firstName &&
        this.state.lastName &&
        this.state.tosAccepted
    ) {
      return false;
    }
    return true;
  }

  handleInputChange = (prop, value) => {
    this.setState({ [prop]: value });
  }

  render() {
    const { loading, error } = this.props;
    const {
      firstName,
      lastName,
      email,
      password,
      tosAccepted,
    } = this.state;
    return (
      <S.Wrapper keyboardShouldPersistTaps="handled">
        <S.SocialText>Registrer deg med</S.SocialText>
        <Social facebookLogin={this.props.facebookLogin} googleLogin={this.props.googleLogin} />
        <S.InputContainer>
          <S.InputText>Opprett profil</S.InputText>
          <Loader loading={loading} />
          <Input
            field="firstName"
            placeholder="Fornavn"
            onInputChange={this.handleInputChange}
            value={firstName}
          />
          {error.FirstName ?
            <S.ErrorView>
              <S.ErrorMessage>{error.FirstName}</S.ErrorMessage>
            </S.ErrorView> :
                null
              }
          <Input
            field="lastName"
            placeholder="Etternavn"
            onInputChange={this.handleInputChange}
            value={lastName}
          />
          {error.LastName ?
            <S.ErrorView>
              <S.ErrorMessage>{error.LastName}</S.ErrorMessage>
            </S.ErrorView> :
                null
              }
          <Input
            field="email"
            placeholder="Din epost"
            keyboardType="email-address"
            onInputChange={this.handleInputChange}
            value={email}
          />
          {error.Email ?
            <S.ErrorView>
              <S.ErrorMessage>{error.Email}</S.ErrorMessage>
            </S.ErrorView>
            : null
          }
          <Input
            field="password"
            placeholder="Passord"
            onInputChange={this.handleInputChange}
            value={password}
            secureTextEntry
          />
          {error.Password ?
            <S.ErrorView>
              <S.ErrorMessage>{error.Password}</S.ErrorMessage>
            </S.ErrorView>
            : null
          }
          <CheckBox
            style={{ flex: 1, padding: 10 }}
            onClick={this.onTermsToggle}
            isChecked={tosAccepted}
            rightText="Jeg godtar brukervilkårene"
          />
          <TOS />
          {error.global ?
            <S.ErrorView>
              <S.ErrorMessage>{error.global}</S.ErrorMessage>
            </S.ErrorView> :
            null
          }
          <S.AuthButton>
            <Button
              disabled={(this.validate())}
              onPress={this.onSignUpPress}
              title="Registrer deg"
            />
          </S.AuthButton>
        </S.InputContainer>
      </S.Wrapper>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  error: auth.signupError,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ requestSignUp }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
