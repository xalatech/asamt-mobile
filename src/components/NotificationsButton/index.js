import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import notificationsIcon from '@images/notificationIcon.png';

import * as S from './styled';

const NotificationsButton = props => (
  <S.Wrapper>
    <S.NotificationIcon source={notificationsIcon} />
    <S.PinNotification>
      {props.list.length}
    </S.PinNotification>
  </S.Wrapper>
);

NotificationsButton.propTypes = {
  list: PropTypes.array.isRequired,
};

const mapStateToProps = ({ notifications: { list } }) => ({
  list,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsButton);
