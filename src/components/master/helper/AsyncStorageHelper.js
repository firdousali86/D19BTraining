import AsyncStorage from "@react-native-async-storage/async-storage";

class AsyncStorageHelper {


    setData = async (key, value) => {
        try 
        {
            console.log('set');
            AsyncStorage.setItem(key, value);
        } catch (e) {
            console.error(e);
        }
    };

    getData = async (key) => {
        try 
        {
            console.log('get');
            const userData = await AsyncStorage.getItem(key);
            return (JSON.parse(userData));

        } catch (e) {
            console.error(e);
        }
    };

}

export default new AsyncStorageHelper;