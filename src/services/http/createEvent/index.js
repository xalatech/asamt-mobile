import http from '../index';

export const createEvent = (data) => {
  const randomId = Math.floor(Math.random() * (10000000 - 1)) + 1; // for test working method

  const defaultValues = {
    title: 'test',
    description: 'tetete',
    category: 'string',
    type: 'string',
    locale: 'string',
    starting: '2018-06-25T11:20:37.942Z',
    ending: '2018-06-25T11:20:37.942Z',
    coverImage: 'string',
    thumbnail: 'string',
    source: 'string',
    price: 0,
    capacity: 0,
    ticketURL: 'string',
    venue: {
      id: randomId,
      name: 'string',
      type: 'string',
      address: 'string',
      postalCode: 'string',
      city: 'string',
      country: 'string',
      telephone: 'string',
      email: 'string',
      website: 'string',
      additionalInfo: 'string',
    },
    latitude: 'string',
    longitude: 'string',
    userId: 'string',
    id: randomId,
  };
  const newEvent = Object.assign(defaultValues, data);

  return http.post('/events', newEvent);
};
