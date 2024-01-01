import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, Text, TextInput, View, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

const FImage = props => {

    const [images, setImages] = useState([]);
    const [num_of_img, setNumOfImg] = useState(0);

    useEffect(() => {
        prepareItem(num_of_img)
    }, [num_of_img]);

    const prepareItem = (num) => {
        const prepareImages = [];
        for (let index = 0; index < num; index++) {
            prepareImages[index] = (
                <FastImage
                    style={styles.box}
                    source={{
                        uri: 'https://unsplash.it/400/400?image=' + index,
                    }}
                />
            );
        }
        setImages(prepareImages);
    };

    const renderItem = ({ item }) => {
        return (
            <View style={{ padding: 5 }}>
                {item}
            </View>
        );
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <TextInput
                        placeholder="Num Of IMG"
                        value={num_of_img}
                        style={[styles.input]}
                        keyboardType="numeric"
                        onChangeText={changedText => {
                            setNumOfImg(changedText);
                        }}
                    />
                </View>
                <View style={styles.container1}>
                    <FlatList data={images} numColumns={5} renderItem={renderItem} />
                </View>
            </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container1: {
        marginTop: 8,
        backgroundColor: 'aliceblue',
    },
    box: {
        width: 50,
        height: 50,
        borderRadius: 20
    },
    container: {
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        margin: 10,
    },

    input: {
        flex: 2,
        backgroundColor: '#f2f2f2',
        borderRadius: 20,
        padding: 10,
        marginHorizontal: 10,
        fontSize: 16,
    },
});

export default FImage;
