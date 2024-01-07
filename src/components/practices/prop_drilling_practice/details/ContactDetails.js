import React,{memo} from "react";
import { View, Text } from "react-native";
import { useUserContext } from "../../../master/contextApi/userContext";

const ContactDetails = props =>
{
    const userObject = useUserContext();

	console.log('Contact render');

	return (
		<View style={ {} }>
            <Text>Gender: { userObject?.gender }</Text>
            <Text>Address : { userObject?.address }</Text>
            <Text>Phone : { userObject?.phone }</Text>
        </View>
	);
}
export default memo(ContactDetails);