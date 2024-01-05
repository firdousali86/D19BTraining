import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { useUserContext } from '../../contexts/UserContext';

const EducationDetails = props => {
    console.log("Education Detail View renderd");
    const userObject = useUserContext();
    return (
        <View style={{}}>
            <Text>Degree: {userObject?.degree}</Text>
            <Text>University: {userObject?.university}</Text>
        </View>
    )
}

export default memo(EducationDetails);

const styles = StyleSheet.create({})