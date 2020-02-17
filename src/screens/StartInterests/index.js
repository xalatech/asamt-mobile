import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import apps from '@apps';
import InterestsBlock from '@components/InterestsBlock';
import Button from '@components/core/Button';
import * as S from './styled';

class StartInterests extends Component {
  static propTypes = {
    checkInterests: PropTypes.bool.isRequired,
  }

  static navigatorStyle = {
    navBarTextColor: 'white',
  }

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.id === 'didAppear') {
      if (this.props.checkInterests) {
        apps.tabBased();
      }
    }
  }

  render() {
    return (
      <S.BackgroundView>
        <InterestsBlock />
        <S.BtnContainer>
          <Button
            onPress={apps.tabBased}
            title="Finn Hendelser"
          />
        </S.BtnContainer>
      </S.BackgroundView>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  checkInterests: auth.haveInterests,
});

export default connect(mapStateToProps, null)(StartInterests);
