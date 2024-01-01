import AsyncStorage from '@react-native-async-storage/async-storage';

class PersistanceHelper {
  // actualValue = undefined;

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
}

export default new PersistanceHelper();
