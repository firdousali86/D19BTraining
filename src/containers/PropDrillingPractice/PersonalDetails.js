import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react';
import { useUserContext } from '../../contexts/UserContext';

const PersonalDetails = props => {
    console.log("Personal Detail View renderd");
    const userObject = useUserContext();
    //  console.log(userObject);
    return (
        <View style={{}}>
            <Text>Name: {userObject.firstName + " " + userObject.lastName}</Text>
            <Text>Age: {userObject?.age}</Text>
            <Text>Gender: {userObject?.gender}</Text>
        </View>
    )
}

export default memo(PersonalDetails);

const styles = StyleSheet.create({})