import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'

const ListCellView = ({ item }) => {
    console.log("ListCell View renderd");
    const { brand, model, color } = item;
    return (
        <View
            style={{
                backgroundColor: 'white',
                margin: 2,
                height: 70,
                flexDirection: 'row',
                alignItems: 'center',
            }}>
            <View
                style={{
                    width: 30,
                    height: 30,
                    backgroundColor: 'pink',
                    margin: 5
                }}></View>
            <View>
                <Text>{brand}</Text>
                <Text>{model}</Text>
                <Text>{color}</Text>
            </View>
        </View>
    )
}

export default memo(ListCellView);

const styles = StyleSheet.create({})