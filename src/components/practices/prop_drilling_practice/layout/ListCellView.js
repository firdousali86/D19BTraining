import { StyleSheet, View } from 'react-native'
import React from 'react'

const ListCellView = props => {
    const { brand, model, color } = props.item

    return (

        <View style={{
            backgroundColor: 'white',
            margin: 2,
            alignItems: 'center',
            height: 48, flexDirection: 'row'
        }}>

            <View style={{
                width: 30, height: 30,
                backgroundColor: 'pink',
                margin: 5
            }}></View>
            <View>
                <Text>{brand}</Text>
                <Text>{model}</Text>
                <Text>{color}</Text>
            </View>
        </View>

    );
}

export default ListCellView

const styles = StyleSheet.create({})