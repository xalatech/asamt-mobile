import _ from 'lodash';
import moment from 'moment';

const programs = p =>
  _(p)
    .orderBy(program => moment.utc(program.concertTime))
    .map((program) => {
      const date = moment.utc(program.concertTime);

      return {
        ...program,
        concertDay: date.format('MMMM Do'),
        concertHours: date.format('HH:mm'),
      };
    })
    .value();

const schedule = artists =>
  _(artists)
    .orderBy(program => moment.utc(program.concertTime))
    .groupBy(artist => moment.utc(artist.concertTime).startOf('day').format())
    .map((actors, key) => ({
      name: moment.utc(key).format('dddd'),
      artists: programs(actors),
    }))
    .value();

const scenes = s =>
  _(s)
    .groupBy('concertPlace')
    .map((artists, key) => ({
      name: key,
      image: artists[0].sceneImage || artists[0].artistImage || '',
      artists,
      schedule: schedule(artists),
      order: artists[0].sceneOrder,
    }))
    .orderBy(scene => scene.order)
    .value();

const scene = item => ({
  name: 'Alle scener',
  image: item.coverImage,
  artist: programs(item.programs),
});

export const listFormatter = data => data.map(item => ({
  ...item,
  starting: moment(item.starting).format('D. '),
  ending: moment(item.ending).format(' D. MMM'),
}));

export const detailFormatter = item => ({
  ...item,
  starting: moment(item.starting).format('ddd, MMM D, h:mm a, YYYY'),
  scenes: [scene(item), ...scenes(item.programs)],
  programs: programs(item.programs),
  Praksisinfo: item.Praksisinfo || '',
});
