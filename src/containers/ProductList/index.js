import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const itemList = [
    { name: 'Product 1', details: 'product1 detail', price: 2500 },
    { name: 'Product 2', details: 'product2 detail', price: 1500 },
    { name: 'Product 3', details: 'product3 detail', price: 800 },
    { name: 'Product 4', details: 'product4 detail', price: 50 },
    { name: 'Product 5', details: 'product5 detail', price: 500 },
    { name: 'Product 6', details: 'product6 detail', price: 600 },
];
const ProductList = () => {
    return (
        <View>
            <FlatList data={itemList} renderItem={({ item, index }) => {
                return (
                    <View style={{ backgroundColor: 'pink', marginVertical: 5, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, alignItems: 'center' }}>
                        <View>
                            <Text>{item.name}</Text>
                            <Text>{item.details}</Text>
                            <Text>{item.price}</Text>
                        </View>
                        <TouchableOpacity onPress={() => { }} style={{ backgroundColor: 'grey', padding: 10, borderRadius: 5 }}>
                            <Text>Add To Cart</Text>
                        </TouchableOpacity>
                    </View>

                );


            }} />
        </View>
    )
}

export default ProductList

const styles = StyleSheet.create({})