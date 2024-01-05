import React from "react";
import { View, Text } from "react-native";

const ContactDetails = props =>
{
	return (
		<View style={ {} }>
            <Text>Gender: { props.userObject.gender }</Text>
            <Text>Address : { props.userObject.address }</Text>
            <Text>Phone : { props.userObject.phone }</Text>
        </View>
	);
}
export default ContactDetails;