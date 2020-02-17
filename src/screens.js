import { Navigation } from 'react-native-navigation';

import FeedSwitchNavBar from '@components/FeedSwitchNavBar';
import NotificationsButton from '@components/NotificationsButton';

import Intro from '@screens/Intro';
import Drawer from '@screens/Drawer';
import AuthLogin from '@screens/AuthLogin';
import Interests from '@screens/Interests';
import Notifications from '@screens/Notifications';
import StartInterests from '@screens/StartInterests';

import SavedFestivals from '@screens/Festivals/Saved';
import FestivalsFeed from '@screens/Festivals/Feed';
import Festival from '@screens/Festivals/Details';
import Info from '@screens/Festivals/Details.Info';
import Artists from '@screens/Festivals/Details.Artists';
import Program from '@screens/Festivals/Details.Program';
import Explore from '@screens/Festivals/Details.Explore';
import Schedule from '@screens/Festivals/Details.Schedule';
import FoodAndDrink from '@screens/Festivals/Details.FoodAndDrinks';
import FestivalMap from '@screens/Festivals/Details.Map';
import Information from '@screens/Festivals/Details.Information';

import Events from './screens/Events/Events';
import SavedEvents from './screens/Events/SavedEvents';
import EventDetails from './screens/Events/EventDetails';
import ActivitiesDetails from './screens/Activities/ActivitiesDetails';
import Categories from './screens/Events/Categories';
import Search from './screens/Search';
import CategoriesTab from './screens/Tabs/Categories';
import Feed from './screens/Tabs/Feed';
import Saved from './screens/Tabs/Saved';
import Suggestions from './screens/Tabs/Suggestions';
import Trending from './screens/Tabs/Trending';
import Settings from './screens/Settings';
import Location from './screens/Location';
import Guest from './screens/Guest';
import Facebook from './screens/AuthLogin/components/Social/Facebook';
import Google from './screens/AuthLogin/components/Social/Google';

const registerScreens = (store, Provider) => {
  Navigation.registerComponent('FeedSwitchNavBar', () => FeedSwitchNavBar, store, Provider);
  Navigation.registerComponent('NotificationsButton', () => NotificationsButton, store, Provider);

  Navigation.registerComponent('Intro', () => Intro, store, Provider);
  Navigation.registerComponent('Drawer', () => Drawer, store, Provider);
  Navigation.registerComponent('AuthLogin', () => AuthLogin, store, Provider);
  Navigation.registerComponent('Interests', () => Interests, store, Provider);
  Navigation.registerComponent('Notifications', () => Notifications, store, Provider);

  Navigation.registerComponent('Festivals.Feed', () => FestivalsFeed, store, Provider);
  Navigation.registerComponent('Festivals.Saved', () => SavedFestivals, store, Provider);
  Navigation.registerComponent('Festival.Details', () => Festival, store, Provider);
  Navigation.registerComponent('Festival.Details.Explore', () => Explore, store, Provider);
  Navigation.registerComponent('Festival.Details.Map', () => FestivalMap, store, Provider);
  Navigation.registerComponent('Festival.Details.Information', () => Information, store, Provider);
  Navigation.registerComponent('Festival.Details.Schedule', () => Schedule, store, Provider);
  Navigation.registerComponent('Festival.Details.Artists', () => Artists, store, Provider);
  Navigation.registerComponent('Festival.Details.Info', () => Info, store, Provider);
  Navigation.registerComponent('Festival.Details.FoodAndDrink', () => FoodAndDrink, store, Provider);
  Navigation.registerComponent('Festival.Details.Program', () => Program, store, Provider);
  Navigation.registerComponent('Festival.Details.Information', () => Information, store, Provider);

  Navigation.registerComponent('Events', () => Events, store, Provider);
  Navigation.registerComponent('SavedEvents', () => SavedEvents, store, Provider);
  Navigation.registerComponent('Event', () => EventDetails, store, Provider);
  Navigation.registerComponent('Activity', () => ActivitiesDetails, store, Provider);
  Navigation.registerComponent('Categories', () => Categories, store, Provider);
  Navigation.registerComponent('Search', () => Search, store, Provider);
  Navigation.registerComponent('CategoriesTab', () => CategoriesTab, store, Provider);
  Navigation.registerComponent('Feed', () => Feed, store, Provider);
  Navigation.registerComponent('Saved', () => Saved, store, Provider);
  Navigation.registerComponent('Suggestions', () => Suggestions, store, Provider);
  Navigation.registerComponent('Trending', () => Trending, store, Provider);
  Navigation.registerComponent('StartInterests', () => StartInterests, store, Provider);
  Navigation.registerComponent('Settings', () => Settings, store, Provider);
  Navigation.registerComponent('Location', () => Location, store, Provider);
  Navigation.registerComponent('Guest', () => Guest, store, Provider);
  Navigation.registerComponent('Facebook', () => Facebook, store, Provider);
  Navigation.registerComponent('Google', () => Google, store, Provider);
};

export default registerScreens;
