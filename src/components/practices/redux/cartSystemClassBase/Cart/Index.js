import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CartListsClass from "./CartListsClass";
import { Button } from "react-native-elements";


class ClassCart extends React.Component {

    render() {
        return (
            <View>
                <Button title="Go to Class Product List" buttonStyle={styles.goToCartButton} onPress={() => this.props.navigation.navigate('Product Lists Class')} />
                <CartListsClass />
            </View>
        )
    }
}

export default ClassCart;



const styles = StyleSheet.create({

    goToCartButton: {
        backgroundColor: "#f03800",
        padding: 10,
        borderRadius: 8,
        marginVertical: 8,
        marginHorizontal: 16,
        fontWeight: 600
    },
});
