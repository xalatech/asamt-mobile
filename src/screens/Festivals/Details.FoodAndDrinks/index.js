import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as S from './styled';
import List from './List';

const FoodAndDrink = ({ event }) => (
  <S.Wrapper>
    <List title="Mat" data={event.food} />
    <List title="Drink" data={event.beverages} />
  </S.Wrapper>
);

FoodAndDrink.propTypes = {
  event: PropTypes.object.isRequired,
};

const mapStateToProps = ({ festival: { event, isLoading } }) => ({
  isLoading,
  event,
});

export default connect(mapStateToProps, null)(FoodAndDrink);

