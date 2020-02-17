import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DismissKeyboardHOC from '@components/DismissKeyboardHOC';

import { handleInput, onSubmit } from '@redux/modules/search';

import * as S from './styled';
import Results from './Results';

import searchIcon from '../../images/searchBtn.png';

const DismissKeyboardView = DismissKeyboardHOC(S.Wrapper);

class Search extends Component {
  static navigatorStyle = {
    tabBarHidden: true,
    statusBarColor: '#FF8300',
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = (event) => {
    if (event.id === 'didAppear') {
      this.inputRef.focus();
    }
  }

  onSubmitEdit = () => this.props.onSubmit(this.props.inputValue);

  setInputRef = (ref) => {
    this.inputRef = ref;
  }

  render() {
    return (
      <DismissKeyboardView>
        <S.SearchWrapper>
          <S.Input
            innerRef={this.setInputRef}
            placeholder="Search"
            value={this.props.inputValue}
            onChangeText={value => this.props.handleInput(value)}
            onSubmitEditing={this.onSubmitEdit}
          />
          <S.SearchButton onPress={this.onSubmitEdit}>
            <S.SearchIcon source={searchIcon} />
          </S.SearchButton>
        </S.SearchWrapper>
        <Results data={this.props.list} isLoading={this.props.isLoading} />
      </DismissKeyboardView>
    );
  }
}

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ search: { inputValue, list, isLoading } }) => ({
  inputValue,
  list,
  isLoading,
});

const mapDispatchToProps = {
  handleInput,
  onSubmit,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
