import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Category from '@components/Category';
import Button from '@components/core/Button';

import * as S from './styled';

const CategoriesBlock = props => (
  <Fragment>
    <S.Wrapper>
      <S.ScrollViewWrapper>
        <S.StyledScrollView showsVerticalScrollIndicator={false}>
          <S.CategoriesWrapper>
            {props.categories.map((item, index) => (
              <Category
                item={item}
                index={index}
                onToggle={props.toggleCheckCategory}
                key={item.id}
              />))
            }
          </S.CategoriesWrapper>
        </S.StyledScrollView>
      </S.ScrollViewWrapper>
    </S.Wrapper>
    <S.ShowEventsBtnWrapper>
      <S.BtnContainer>
        <Button
          onPress={props.showEvents}
          title="Finn Hendelser"
        />
      </S.BtnContainer>
    </S.ShowEventsBtnWrapper>
  </Fragment>
);

CategoriesBlock.propTypes = {
  toggleCheckCategory: PropTypes.func.isRequired,
  showEvents: PropTypes.func.isRequired,
  categories: PropTypes.any.isRequired,
};

export default CategoriesBlock;

