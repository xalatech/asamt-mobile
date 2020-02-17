import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as S from './styled';
import Scene from './Scene';

class Program extends Component {
  goTo = (sceneName) => {
    if (sceneName === 'Alle scener') {
      return this.props.navigator.push({
        screen: 'Festival.Details.Artists',
        title: 'Artists',
      });
    }

    return this.props.navigator.push({
      screen: 'Festival.Details.Schedule',
      title: sceneName,
      passProps: {
        name: sceneName,
      },
    });
  };

  render() {
    return (
      <S.Wrapper>
        <S.ScenesWrapper showsVerticalScrollIndicator={false}>
          <S.Scenes>
            {this.props.event.scenes.map(item => (
              <Scene key={item.name} item={item} onItemTap={this.goTo} />
            ))}
          </S.Scenes>
        </S.ScenesWrapper>
      </S.Wrapper>
    );
  }
}

Program.propTypes = {
  event: PropTypes.any.isRequired,
};

const mapStateToProps = ({ festival: { event } }) => ({
  event,
});

export default connect(mapStateToProps, null)(Program);
