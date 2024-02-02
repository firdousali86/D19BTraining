import EncryptedStorage from 'react-native-encrypted-storage';

class KeyChainHelper {
  storeUserSession = async (email, password) => {
    try {
      const test = await EncryptedStorage.setItem(
        'user_session',
        JSON.stringify({
          email: email,
          password: password,
        }),
      );

      setTimeout(() => {
        console.log(test);
      }, 5000);

      console.log('Data stored successfully');
    } catch (error) {
      console.log(error);
    }
  };

  retrieveUserSession = async () => {
    try {
      const session = await EncryptedStorage.getItem('user_session');
      console.log(session);
    } catch (error) {
      console.error('Error storing data:', error);
    }
  };
}

export default new KeyChainHelper();
