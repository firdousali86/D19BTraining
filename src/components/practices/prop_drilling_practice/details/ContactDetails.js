import React,{memo} from "react";
import { View, Text } from "react-native";

const ContactDetails = props =>
{
	console.log('Contact render');

	return (
		<View style={ {} }>
            <Text>Gender: { props.userObject.gender }</Text>
            <Text>Address : { props.userObject.address }</Text>
            <Text>Phone : { props.userObject.phone }</Text>
        </View>
	);
}
export default memo(ContactDetails);