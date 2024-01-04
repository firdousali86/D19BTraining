import AsyncStorage from "@react-native-async-storage/async-storage";

class PersistanceHelper {

    setValue = someValue => {
        AsyncStorage.setItem('userEmail', someValue);
    };

    getData = async () => {
        try {
            const value = await AsyncStorage.getItem('userEmail');
            
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