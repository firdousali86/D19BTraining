import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ListView from './ListView';
const BodyView = () => {
    return (
        <View style={{ flex: 0.6, backgroundColor: 'yellow' }}>
            <ListView />
        </View>
    )
}

export default BodyView

const styles = StyleSheet.create({})