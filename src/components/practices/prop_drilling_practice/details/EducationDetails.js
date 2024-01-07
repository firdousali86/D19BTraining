import React ,{memo}from "react";
import { View, Text } from "react-native";
import { useUserContext } from "../../../master/contextApi/userContext";
const EducationDetails = props => {
	console.log('Education render');
const userObject  = useUserContext();
    return (
        <View style={{}}>
            <Text>Degree : {userObject?.degree}</Text>
            <Text>University : {userObject?.university}</Text>
        </View>
    );
}
export default memo(EducationDetails);