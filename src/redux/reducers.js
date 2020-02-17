import { combineReducers } from 'redux';

import events from './modules/events';
import location from './modules/location';
import eventDetails from './modules/eventDetails';
import auth from './modules/auth';
import categories from './modules/categories';
import savedEvents from './modules/savedEvents';
import savedFestivals from './modules/savedFestivals';
import route from './modules/route';
import search from './modules/search';
import date from './modules/date';
import interests from './modules/interests';
import festival from './modules/festival';
import feedSwitchNavBar from './modules/feedSwitchNavBar';
import festivalsFeed from './modules/festivalsFeed';
import notifications from './modules/notifications';
import related from './modules/related';
import addEvent from './modules/addEvents';
import activities from './modules/activities';
import activitiesDetails from './modules/activitiesDetails';
import config from './modules/config';

const rootReducer = combineReducers({
  auth,
  events,
  location,
  eventDetails,
  categories,
  savedEvents,
  route,
  search,
  interests,
  date,
  festival,
  feedSwitchNavBar,
  festivalsFeed,
  savedFestivals,
  notifications,
  related,
  addEvent,
  activities,
  activitiesDetails,
  config,
});

export default rootReducer;
