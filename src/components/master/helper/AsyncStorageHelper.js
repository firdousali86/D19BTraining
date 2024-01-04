import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

class AsyncStorageHelper {
    user = undefined;

    logInDataSet = user => {

        return this.user = 'Fenish';

    };

    logInDataGet = () => {
        return this.user;
    };

    // logInDataStore = async (user) => {
    //     try {
    //         console.log('set', user);
    //         AsyncStorage.setItem('userData', user);
    //     } catch (e) {
    //         console.error(e);
    //     }
    // };

    // logInDataGet = async (key) => {
    //     try {
    //         console.log('get');
    //         const userData = await AsyncStorage.getItem('userData');
    //         console.log(userData);

    //     } catch (e) {
    //         console.error(e);
    //     }
    // };

}

export default new AsyncStorageHelper;