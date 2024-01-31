import React, { useRef } from "react";
import { FlatList, Text, TouchableOpacity, View, StyleSheet, Animated, Easing, Button } from "react-native";
import { addToCart, removeFromCart, clearToCart } from "../../features/cart/CartSlice";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from "react-native-gesture-handler";


const ProductsLists = ({ itemLists }) => {

    const inputField  = useRef('');

    const navigation = useNavigation();
    const fadeAnim = new Animated.Value(0);
    const dispatch = useDispatch();

    React.useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            easing: Easing.ease,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim]);

    const renderListItem = ({ item }) => (
        <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
            <View style={styles.details}>
                <Text style={styles.title}>{item.modal}</Text>
                <Text style={styles.subtitle}>{item.year}</Text>
                <Text style={styles.subtitle}>{item.name}</Text>
                <Text style={styles.price}>{item.price} Lakhs</Text>
            </View>
            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.buttonText} onPress={() => {
                    dispatch(addToCart(item))
                }}>Add To Cart</Text>
            </TouchableOpacity>
        </Animated.View>
    );

    return (
        <>
            <TouchableOpacity style={styles.goToCartButton} onPress={() =>  navigation.navigate('Cart')}>
                <Icon name="rocket"  size={30} color="#900" />
                <Text  style={{fontSize:20}}>Data</Text>

            </TouchableOpacity>
            <TextInput  style={styles.price} ref={inputField} placeholder="Input Field" />

            <FlatList
                data={itemLists}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderListItem}
            />
        </>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: "#F64668",
        borderRadius: 12,
        elevation: 2,
    },
    details: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 14,
        color: "#555",
        marginBottom: 2,
    },
    price: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#cdcdcd",
        marginTop: 8,
    },
    addButton: {
        backgroundColor: "#FE9677",
        padding: 10,
        borderRadius: 8,
    },
    buttonText: {
        color: "#5a4955",
        fontWeight: "bold",
    },
    goToCartButton: {
        backgroundColor: "#FE9677",
        padding: 10,
        borderRadius: 8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        margin:10


    },
});

export default ProductsLists;
