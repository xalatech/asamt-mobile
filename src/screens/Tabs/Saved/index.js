import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SavedFestivals from '@screens/Festivals/Saved';
import SavedEvents from '@screens/Events/SavedEvents';

const Saved = (props) => {
  switch (props.type) {
    case ('Events'):
    case ('Activities'):
    default:
      return (
        <SavedEvents {...props} />
      );
    case ('Festivals'):
      return (
        <SavedFestivals {...props} />
      );
  }
};

Saved.propTypes = {
  type: PropTypes.string.isRequired,
};

const mapStateToProps = ({ feedSwitchNavBar: { type } }) => ({
  type,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Saved);
