import React,{memo} from "react";
import { View, Text } from "react-native";
import { useUserContext } from "../../../master/contextApi/userContext";
const PersonalDetails = props => {
	console.log('Person render');
    const userObject = useUserContext();
    return (
        <View style={{}}>
            <Text>Name: {userObject?.name}</Text>
            <Text>Age : {userObject?.age}</Text>
        </View>
    );
}
export default memo(PersonalDetails);