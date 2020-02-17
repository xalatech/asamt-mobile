import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { requestNotifications, openNotifications } from '@redux/modules/notifications';

import * as S from './styled';
import NotificationItem from './NotificationItem';
import EmptyNotifications from './EmptyNotifications';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.id === 'didAppear') {
      this.props.openNotifications();
      this.props.requestNotifications();
    }
  }

  render() {
    return (
      <S.Container>
        <S.Wrapper>
          {this.props.list.length === 0 && <EmptyNotifications />}
          <S.StyledFlatList
            data={this.props.list}
            showsVerticalScrollIndicator={false}
            refreshing={this.props.isLoading}
            onRefresh={this.props.requestNotifications}
            keyExtractor={(item, index) => item.title + index}
            renderItem={({ item, index }) => (
              <NotificationItem data={item} index={index} />
            )}
          />
        </S.Wrapper>
      </S.Container>
    );
  }
}

Notifications.propTypes = {
  openNotifications: PropTypes.func.isRequired,
  requestNotifications: PropTypes.func.isRequired,
  list: PropTypes.any.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ notifications: { isLoading, list, unreadNotifications } }) => ({
  isLoading,
  list,
  unreadNotifications,
});

const mapDispatchToProps = {
  requestNotifications,
  openNotifications,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
