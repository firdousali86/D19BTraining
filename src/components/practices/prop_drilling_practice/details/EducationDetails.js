import React ,{memo}from "react";
import { View, Text } from "react-native";
const EducationDetails = props => {
	console.log('Education render');

    return (
        <View style={{}}>
            <Text>Degree : {props.userObject.degree}</Text>
            <Text>University : {props.userObject.university}</Text>
        </View>
    );
}
export default memo(EducationDetails);