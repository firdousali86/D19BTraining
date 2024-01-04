import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const ListCellView = ({ item }) => {

    const { brand, model, color } = item;

    return (

        <View style={{ backgroundColor: 'white', margin: 2, alignItems: 'center', height: 48, flexDirection: 'row' }}>
            <View style={{ width: 30, height: 30, backgroundColor: 'pink', margin: 5 }}></View>
            <View>
                <Text>{brand}</Text>
                <Text>{model}</Text>
                <Text>{color}</Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({})

export default ListCellView

