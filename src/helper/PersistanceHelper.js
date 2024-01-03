import AsyncStorage from "@react-native-async-storage/async-storage";

class PersistanceHelper {

    setValue = someValue => {
        AsyncStorage.setItem('email', someValue);
    };

    getData = async () => {
        try {
            const value = await AsyncStorage.getItem('email');
            console.log(value);
            if (value !== null) {
                // value previously stored
            }
        } catch (e) {
            // error reading value
        }
    };


};

export default new PersistanceHelper();