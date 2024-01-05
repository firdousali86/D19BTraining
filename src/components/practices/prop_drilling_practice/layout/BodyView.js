import { StyleSheet, View } from 'react-native'
import React from 'react'
import ListView from './ListView'

const BodyView = props => {
    console.log('Body render');
    return (
        <View style={{ flex: 0.6, backgroundColor: 'yellow', flexDirection: "row" }}>
            <ListView  {...props} />
        </View>
    )
}

export default BodyView

const styles = StyleSheet.create({})