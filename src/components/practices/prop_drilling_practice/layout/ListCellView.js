import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const ListCellView = ({item}) => {
    console.log('List cell view render');
    
    const { brand, modal, year } = item;
    return (

        <View style={{ backgroundColor: 'white', margin: 2, alignItems: 'center', height: 48, flexDirection: 'row' }}>
            <View style={{ width: 30, height: 30, backgroundColor: 'pink', margin: 5 }}></View>
            <View>
                <Text>{brand} - {modal}</Text>
                <Text>{year}</Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({})

export default ListCellView

