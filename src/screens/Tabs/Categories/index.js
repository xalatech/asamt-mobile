import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CategoriesScreen from '../../Events/Categories';
import ActivitiesCategories from '../../Activities/Categories';

const Categories = (props) => {
  switch (props.type) {
    case ('Events'):
    default:
      return (
        <CategoriesScreen {...props} />
      );
    case ('Festivals'):
      return (
        <CategoriesScreen {...props} />
      );
    case ('Activities'):
      return (
        <ActivitiesCategories {...props} />
      );
  }
};

Categories.propTypes = {
  type: PropTypes.string.isRequired,
};

const mapStateToProps = ({ feedSwitchNavBar: { type } }) => ({
  type,
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
