import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleCategory, changeView, fetchCategories, fetchCategoriesFeed } from '@redux/modules/categories';
import { fetchActivities } from '@redux/modules/activities';

import { handleDeepLinks } from '@helpers';

import CategoriesBlock from '../../../components/CategoriesBlock/index';
import Feed from './Feed/index';

class ActivitiesCategories extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  onNavigatorEvent(event) {
    handleDeepLinks(event, this.props.navigator);
  }

  toggleCheckCategory = index => this.props.toggleCategory(index);

  fetchList = () => {
    const ids = this.props.categories
      .filter(c => c.isChecked)
      .map(c => ({ id: c.id }));
    if (this.props.showCategories) {
      this.props.changeView();
    }
    this.props.fetchCategoriesFeed(ids);
  }

  goToEvent = (type, id, title) => {
    this.props.navigator.push({
      screen: 'Event',
      passProps: { eventId: id },
      title,
      animationType: 'slide-horizontal',
    });
  };

  render() {
    const {
      categories, showCategories, events,
    } = this.props;
    return (
      <Fragment>
        {showCategories ?
          <CategoriesBlock
            categories={categories}
            showEvents={this.fetchList}
            toggleCheckCategory={this.toggleCheckCategory}
          /> :
          <Feed
            data={events}
            refreshing={this.props.loadingEvents}
            onItemTap={this.goToEvent}
            handleRefreshing={this.fetchList}
            showCategory={this.props.changeView}
          />
        }
      </Fragment>
    );
  }
}

ActivitiesCategories.propTypes = {
  toggleCategory: PropTypes.func.isRequired,
  categories: PropTypes.any.isRequired,
  showCategories: PropTypes.bool.isRequired,
  changeView: PropTypes.func.isRequired,
  events: PropTypes.any.isRequired,
  loadingEvents: PropTypes.bool.isRequired,
  fetchCategories: PropTypes.func.isRequired,
  fetchCategoriesFeed: PropTypes.func.isRequired,
};

const mapStateToProps = ({ categories }) => ({
  categories: categories.list,
  loading: categories.isLoading,
  loadingEvents: categories.loadingEvents,
  showCategories: categories.showCategories,
  loadCategories: categories.isLoading,
  events: categories.events,

});

const mapDispatchToProps = {
  toggleCategory,
  changeView,
  fetchActivities,
  fetchCategories,
  fetchCategoriesFeed,
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesCategories);
