import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../../features/cart/CartSlice";
import { Button } from "react-native-elements";

class ProductsListsClass extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            itemLists: props.itemLists
        }

        console.log(props);
    }
    componentDidMount() {
        console.log('DID MOUNT');

    }
    componentWillMount() {
        console.log('DID WILL MOUNT');
    }

    render() {
        return (
            <View style={{ backgroundColor: '#eff5e7ff' }}>
                <Button title="Go to cart" buttonStyle={styles.goToCartButton} onPress={() => this.props.navigation.navigate('ClassCart')} />
                <FlatList
                    data={this.state.itemLists}
                    renderItem={({ item, index }) => (
                        <View style={styles.card}>
                            <View style={styles.details}>
                                <Text style={styles.title}>{item.modal}</Text>
                                <Text style={styles.subtitle}>{item.year}</Text>
                                <Text style={styles.subtitle}>{item.name}</Text>
                                <Text style={styles.price}>{item.price} Lakhs</Text>
                            </View>
                            <TouchableOpacity style={styles.addButton}>
                                <Text style={styles.buttonText} onPress={() => {
                                    this.props.addToCart(item)
                                }}> + </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        );
    }
}



const mapStateToProps = state => ({
    card: state.card
});
const actions = { addToCart, removeFromCart }

export default connect(mapStateToProps, actions)(ProductsListsClass);


const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: "#52f646",
        borderRadius: 12,
        elevation: 2, borderStyle: 'solid',
        borderWidth: 5,
        borderColor: "#000000",

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
    addButton: {
        backgroundColor: "#FfFFFF",
        padding: 10,
        borderRadius: 10,
        borderStyle: 'solid',
        borderWidth: 5,
        borderColor: "#35e029"
    },
    goToCartButton: {
        backgroundColor: "#f03800",
        padding: 10,
        borderRadius: 8,
        marginVertical: 8,
        marginHorizontal: 16,
        fontWeight: 600
    },
});
