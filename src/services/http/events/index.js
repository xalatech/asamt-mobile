import moment from 'moment';

import http from '../index';
import { listFormatter, detailFormatter } from './formatters';

export const list = ({ date, location: { coords, geolocation, radius } }) => {
  const lat = (coords && coords.lat) || geolocation.coords.latitude;
  const lng = (coords && coords.lng) || geolocation.coords.longitude;

  const params = {
    geoPoint: `${lat},${lng}`,
    radius,
    sort: 'date,desc',
    unit: 'km',
    locale: 'no',
    startDateTime: `${moment(date.date, 'DD.MM.YYYY')
      .format('gggg-MM-DD')}T00:00:00Z`,
    endDateTime: `${moment(date.date, 'DD.MM.YYYY')
      .format('gggg-MM-DD')}T23:59:59Z`,
  };

  return http.get('/events/all', { params })
    .then(({ data }) => listFormatter(data));
};

export const details = id => http.get(`/events/${id}`)
  .then(({ data }) => detailFormatter(data));

export const saveEvent = id => http.post('/favourites', [id]);

export const deleteSaveEvent = id => http.delete(`/favourites/${id}`);

export const savedList = () => http.get('/favourites')
  .then(({ data }) => listFormatter(data));

export const suggested = () => http.get('/events/suggestions')
  .then(({ data }) => listFormatter(data));

export const trending = () => http.get('/events/trending')
  .then(({ data }) => listFormatter(data));
