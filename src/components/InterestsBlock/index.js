import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { checkInterests, addDebounce } from '@helpers';
import { fetchCategories } from '@redux/modules/categories';
import { fetchAllInterests, requestPostInterest, requestDeleteInterest } from '@redux/modules/interests';

import Loader from './Loader';
import Interest from './Interest';

import * as S from './styled';

class InterestsBlock extends Component {
  componentDidMount() {
    this.props.fetchAllInterests();
    this.props.fetchCategories();
  }

  toggleCheckCategory = addDebounce((index, category) => {
    if (category.isChecked === true) {
      this.props.requestDeleteInterest(category.interest.id);
    } else {
      this.props.requestPostInterest(category.id);
    }
  })

  render() {
    const { interests, interestLoading } = this.props;

    return (
      <Fragment>
        <S.Wrapper>
          <S.ScrollViewWrapper>
            <S.StyledScrollView showsVerticalScrollIndicator={false}>
              <Loader loading={interestLoading} />
              {interests &&
                <S.InterestsWrapper>
                  {interests.map((item, index) => (
                    <Interest
                      item={item}
                      index={index}
                      onToggle={this.toggleCheckCategory}
                      key={item.id}
                    />))
                  }
                </S.InterestsWrapper>
              }
            </S.StyledScrollView>
          </S.ScrollViewWrapper>
        </S.Wrapper>
      </Fragment>
    );
  }
}

InterestsBlock.propTypes = {
  requestDeleteInterest: PropTypes.func.isRequired,
  requestPostInterest: PropTypes.func.isRequired,
  interests: PropTypes.any.isRequired,
  fetchAllInterests: PropTypes.func.isRequired,
  fetchCategories: PropTypes.func.isRequired,
  interestLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ categories, interests }) => ({
  interestLoading: interests.isLoading,
  interests: checkInterests(interests.list, categories.list),
});

const mapDispatchToProps = {
  fetchAllInterests,
  requestPostInterest,
  requestDeleteInterest,
  fetchCategories,
};
export default connect(mapStateToProps, mapDispatchToProps)(InterestsBlock);

