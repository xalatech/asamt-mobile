import Storage from './index';

class LocationStorage extends Storage {
  constructor() {
    super('Location');
  }
}

export default new LocationStorage();
