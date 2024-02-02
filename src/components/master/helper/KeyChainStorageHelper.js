import EncryptedStorage from 'react-native-encrypted-storage';

class KeyChainStorageHelper {
  setData = async (key, value) => {
    try {
      await EncryptedStorage.setItem(key, value);
      console.log('KEY-CHAIN DATA SET');
    } catch (error) {
      console.log(error);
    }
  };

  getData = async key => {
    try {
      const storedData = await EncryptedStorage.getItem(key);

      // Check the stored data
      console.log('Stored data:', storedData);
      // return JSON.parse(userData);
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };
}

export default new KeyChainStorageHelper();
