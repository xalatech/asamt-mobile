import http from '../index';
import { listFormatter, detailFormatter } from './formatters';

export const list = () => http.get('/festivals/all')
  .then(({ data }) => listFormatter(data));

export const details = id => http.get(`/festivals/${id}`)
  .then(({ data }) => detailFormatter(data));
