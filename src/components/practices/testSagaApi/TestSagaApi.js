import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { baseURL, kApiPostItems, } from "../../master/config/WebConfig";
import { ApiHelper } from "../../master/Helper";



const TestSagaApi = (params) => {

    useEffect(() => {
        ApiHelper.get(baseURL + kApiPostItems)
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            });
        console.log(baseURL + kApiPostItems);
    }, []);
    return (
        <View>
            <Text>
                This Test Saga API.
            </Text>
        </View>
    );
}

export default TestSagaApi;