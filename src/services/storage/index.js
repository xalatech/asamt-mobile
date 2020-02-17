import { AsyncStorage } from 'react-native';

export default class Storage {
  constructor(type) {
    this.type = type;
  }

  delete = async () => AsyncStorage.removeItem(`Asamt-${this.type}`)

  get = async () => {
    const data = await AsyncStorage.getItem(`Asamt-${this.type}`);

    if (!data) {
      return data;
    }

    return JSON.parse(data);
  }

  save = async data => AsyncStorage.setItem(`Asamt-${this.type}`, JSON.stringify(data))
}
