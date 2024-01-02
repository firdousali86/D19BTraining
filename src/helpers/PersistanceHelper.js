import AsyncStorage from '@react-native-async-storage/async-storage';

class PersistanceHelper {
  setValue = (key, someValue) => {
    // this.actualValue = someValue;
    AsyncStorage.setItem(key, someValue);
  };

  getValue = async key => {
    // return this.actualValue;
    try {
      const value = await AsyncStorage.getItem(key);
      return value;
    } catch (err) {
      console.log(err);
    }
  };

  setObject = (key, data) => {
    const stringifiedobject = JSON.stringify(data);

    console.log(stringifiedobject);

    this.setValue(key, stringifiedobject);
  };

  getObject = async key => {
    const stringifiedobject = await this.getValue(key);

    return JSON.parse(stringifiedobject);
  };
}

export default new PersistanceHelper();
