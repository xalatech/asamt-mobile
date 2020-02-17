import { all, fork } from 'redux-saga/effects';

import * as eventsWatchers from './modules/events';
import * as savedEventsWatchers from './modules/savedEvents';
import * as savedFestivalsWatchers from './modules/savedFestivals';
import * as locationWatchers from './modules/location';
import * as authWatchers from './modules/auth';
import * as eventDetailsWatchers from './modules/eventDetails';
import * as categoriesWatchers from './modules/categories';
import * as routeWatchers from './modules/route';
import * as resultWatchers from './modules/search';
import * as interestsWatchers from './modules/interests';
import * as dateWatchers from './modules/date';
import * as festivalWatchers from './modules/festival';
import * as typeWatchers from './modules/feedSwitchNavBar';
import * as festivalsWatcher from './modules/festivalsFeed';
import * as notificationsWatcher from './modules/notifications';
import * as relatedEventsWatcher from './modules/related';
import * as createEventWatcher from './modules/addEvents';
import * as activitiesWathcer from './modules/activities';
import * as activityDetailsWathcers from './modules/activitiesDetails';

export default function* root() {
  yield all([
    fork(eventsWatchers.watchGetEvents),
    fork(locationWatchers.watchAddLocation),
    fork(locationWatchers.watchAddCurrentLocation),
    fork(locationWatchers.watchChangeRadius),
    fork(eventDetailsWatchers.watchEventDetails),
    fork(authWatchers.watchSignUp),
    fork(authWatchers.watchLogout),
    fork(categoriesWatchers.watchChangeCheck),
    fork(savedEventsWatchers.watchGetSavedEvents),
    fork(authWatchers.watchLogin),
    fork(routeWatchers.watchChangeScreen),
    fork(resultWatchers.getResultWatcher),
    fork(interestsWatchers.watchChangeCheck),
    fork(dateWatchers.watchSetDate),
    fork(festivalWatchers.watchGetFestival),
    fork(festivalWatchers.watchGetSchedule),
    fork(typeWatchers.watchRequestChangeType),
    fork(festivalsWatcher.watchGetFestivals),
    fork(savedFestivalsWatchers.watchGetSavedFestivals),
    fork(festivalWatchers.watchGetTopFestival),
    fork(notificationsWatcher.watchRequestNotifications),
    fork(relatedEventsWatcher.watchGetRelatedEvents),
    fork(authWatchers.watchBusinessSignUp),
    fork(authWatchers.watchCheckAuthentication),
    fork(createEventWatcher.watchPostEvent),
    fork(activitiesWathcer.watchGetActivities),
    fork(categoriesWatchers.watchGetAllCategories),
    fork(interestsWatchers.watchGetAllInterests),
    fork(interestsWatchers.watchPostInterest),
    fork(interestsWatchers.watchDeleteInterest),
    fork(categoriesWatchers.watchGetCategoriesFeed),
    fork(activityDetailsWathcers.watchActivityDetails),
    fork(authWatchers.watchFacebookLogin),
    fork(authWatchers.watchGoogleLogin),
  ]);
}
