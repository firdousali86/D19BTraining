import AsyncStorage from '@react-native-async-storage/async-storage';

class PersistanceHelper {
  setValue = (key, someValue) => {
    // this.actualValue = someValue;
    console.log(someValue);
    AsyncStorage.setItem(key, someValue);
  };

  getValue = async key => {
    // return this.actualValue;
    try {
      const value = await AsyncStorage.getItem(key);
      console.log(value);
      return value;
    } catch (err) {
      console.log(err);
    }
  };

  setObject = (key, data) => {
    const stringifiedObject = JSON.stringify(data);

    this.setValue(key, stringifiedObject);
  };

  getObject = async key => {
    const stringifiedObject = await this.getValue(key);

    return JSON.parse(stringifiedObject);
  };
}

export default new PersistanceHelper();
