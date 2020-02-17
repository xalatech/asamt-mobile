import React from 'react';

import Block from './components/Block';
import * as S from './styled';

const Settings = () => (
  <S.Container>
    <Block profile title="Profile" />
    <Block notifications title="Varslinger" />
    <Block account title="Konto" />
    <Block privacy isLast title="Vikar & Personvel" />
  </S.Container>
);


export default Settings;
