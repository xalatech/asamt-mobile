import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import eventMock from './mocks/event';
import searchMock from './mocks/search';
import festivalMock from './mocks/festival';
import festivalsMock from './mocks/festivals';
import savedFestivalsMock from './mocks/savedFestivals';
import notificationsMock from './mocks/notifications';
import relatedMock from './mocks/related';
import currentFestival from './mocks/currentFestival';

const baseURL = 'https://asamt-api.azurewebsites.net/api';

const http = axios.create({
  withCredentials: true,
  baseURL,
});

const mock = new MockAdapter(http, { delayResponse: 500 });

mock.onGet('/event').reply(200, eventMock);
mock.onGet('/search').reply(200, searchMock);
mock.onGet('/festival/schedule').reply(200, festivalMock);
mock.onGet('/festival').reply(200, festivalMock);
mock.onGet('/festivals').reply(200, festivalsMock);
mock.onGet('/festival/artists').reply(200, festivalMock);
mock.onGet('/festivals/savedFestivals').reply(200, savedFestivalsMock);
mock.onGet('/topFestival').reply(200, festivalMock);
mock.onGet('/notifications').reply(200, notificationsMock);
mock.onGet('/related').reply(200, relatedMock);
mock.onGet('/festivals/id').reply(200, currentFestival);

export default http;
