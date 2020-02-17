import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Scene = props => (
  <S.Scene onPress={() => props.onItemTap(props.item.name)}>
    <S.SceneWrapper>
      <S.SceneImage source={{ uri: props.item.image }} />
      <S.Overlay />
      <S.SceneNameWrapper>
        <S.SceneName>
          {props.item.name}
        </S.SceneName>
      </S.SceneNameWrapper>
    </S.SceneWrapper>
  </S.Scene>
);

Scene.propTypes = {
  onItemTap: PropTypes.func.isRequired,
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Scene;
