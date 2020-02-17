import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Linking } from 'react-native';
import { requestLogin } from '@redux/modules/auth';

import * as S from './styled';

import Loader from '../components/Loader';
import Social from '../components/Social';
import Input from '../components/Input';

class SignIn extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    actions: PropTypes.shape({
      requestLogin: PropTypes.func.isRequired,
    }).isRequired,
    error: PropTypes.string,
    facebookLogin: PropTypes.func.isRequired,
    googleLogin: PropTypes.func.isRequired,
  }

  static defaultProps = {
    error: '',
  }

  state = {
    email: '',
    password: '',
  }
  componentDidMount() {
    Linking.addEventListener('url', this.handleURL);
  }

  onSignInPress = () => {
    if (!this.validate()) {
      const { email, password } = this.state;
      const credentials = {
        email,
        password,
      };
      this.props.actions.requestLogin(credentials);
    }
  }
  handleURL = (event) => {
    if (!event.loading) {
      console.log(event.url.split('#')[1].split('=')[1].split('&')[0]);
    }
  }

  validate = () => {
    if (this.state.email &&
        this.state.password.length >= 6) {
      return false;
    }
    return true;
  }

  handleInputChange = (prop, value) => {
    this.setState({ [prop]: value });
  }

  render() {
    const { password, email } = this.state;
    const { loading, error } = this.props;
    return (
      <S.Wrapper keyboardShouldPersistTaps="handled">
        <S.SocialText>Logg inn med</S.SocialText>
        <Social facebookLogin={this.props.facebookLogin} googleLogin={this.props.googleLogin} />
        <S.InputContainer>
          <Loader loading={loading} />
          <S.InputText>Logg inn med e-post og passord</S.InputText>
          <Input
            field="email"
            placeholder="Din epost"
            keyboardType="email-address"
            onInputChange={this.handleInputChange}
            value={email}
          />
          <Input
            field="password"
            placeholder="Passord"
            onInputChange={this.handleInputChange}
            value={password}
            secureTextEntry
          />
          {error ?
            <S.ErrorView>
              <S.ErrorMessage>{error}</S.ErrorMessage>
            </S.ErrorView> :
            null
          }
          <S.AuthButton disabled={(this.validate())} onPress={this.onSignInPress}>
            <S.AuthText>Logg inn</S.AuthText>
          </S.AuthButton>
        </S.InputContainer>
      </S.Wrapper>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  error: auth.loginError,
  checkInterests: auth.haveInterests,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ requestLogin }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
