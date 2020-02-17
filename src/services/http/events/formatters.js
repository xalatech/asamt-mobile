import moment from 'moment';

export const listFormatter = data => data.map(item => ({
  ...item,
  starting: moment(item.starting).format('ddd, MMM D, h:mm a'),
  startingTime: moment(item.starting).format('h:mm a'),
}));

export const detailFormatter = item => ({
  ...item,
  startingDate: moment(item.starting).format('ddd, D. MMM YYYY '),
  startingTime: moment(item.starting).format('h:mm a'),
});
