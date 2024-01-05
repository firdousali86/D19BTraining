import React from "react";
import { View, Text } from "react-native";
const PersonalDetails = props => {
	console.log('Person render');
    return (
        <View style={{}}>
            <Text>Name: {props.userObject.name}</Text>
            <Text>Age : {props.userObject.age}</Text>
        </View>
    );
}
export default PersonalDetails;