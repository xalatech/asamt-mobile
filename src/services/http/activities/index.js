import http from '../index';
import { listFormatter, detailFormatter } from '../events/formatters';

export const list = () => http.get('/activities/all')
  .then(({ data }) => listFormatter(data));

export const details = id => http.get(`/activities/${id}`)
  .then(({ data }) => detailFormatter(data));

export const saveActivities = id => http.post('/favourites', [id]);

export const deleteSaveActivities = id => http.delete(`/favourites/${id}`);

export const suggested = () => http.get('/activities/suggestions')
  .then(({ data }) => listFormatter(data));

export const trending = () => http.get('/activities/trending')
  .then(({ data }) => listFormatter(data));
