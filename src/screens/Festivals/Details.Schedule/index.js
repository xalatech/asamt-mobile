import _ from 'lodash';
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Dimensions } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';

import ArtistList from '@components/ArtistList';
import { fetchSchedule } from '@redux/modules/festival';
import Info from '../Details.Info';
import theme from '../../../theme';

class Schedule extends Component {
  static propTypes = {
    schedule: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    fetchSchedule: PropTypes.func.isRequired,
    routes: PropTypes.array.isRequired,
  }

  // static navigatorButtons = {
  //   rightButtons: [
  //     {
  //       id: 'info',
  //       icon: require('@images/rsz_icon.png'),
  //     },
  //   ],
  // }

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  state = {
    index: 0, // eslint-disable-line react/no-unused-state
    activeModal: false,
  }

  componentDidMount() {
    this.props.fetchSchedule();
  }

  onNavigatorEvent(event) {
    if (event.id === 'info') {
      this.activeModal();
    }
  }

  activeModal = () => {
    this.setState({ activeModal: !this.state.activeModal });
  }

  render() {
    return (
      <Fragment>
        <TabView
          navigationState={{
            index: this.state.index,
            routes: this.props.routes,
          }}
          renderScene={({ route }) => {
            console.log(this.props.schedule[route.key]);
            return <ArtistList type="Schedule" data={this.props.schedule[route.key]} />;
          }}
          renderTabBar={props => (
            <TabBar
              {...props}
              style={{ backgroundColor: `${theme.primaryBlue}` }}
              indicatorStyle={{ backgroundColor: `${theme.primaryOrange}` }}
            />
          )}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
        />
        {this.state.activeModal && <Info onClose={this.activeModal} />}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ festival: { event, isLoading } }, { name }) => {
  const scene = _.find(event.scenes, { name });
  const routes = scene.schedule.map(s => ({ key: s.name, title: s.name }));
  const schedule = scene.schedule.reduce((a, s) => {
    a[s.name] = s.artists;
    return a;
  }, {});

  return {
    isLoading,
    routes,
    schedule,
  };
};

const mapDispatchToProps = {
  fetchSchedule,
};

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
