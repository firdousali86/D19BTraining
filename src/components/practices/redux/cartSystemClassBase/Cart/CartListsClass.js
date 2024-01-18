import React from "react";
import { FlatList, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { addToCart, removeFromCart } from "../../features/cart/CartSlice";
import { connect } from "react-redux";

class CartListsClass extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props.cart.cartItems)
  }
  render() {
    return (
      <View>
        <FlatList data={this.props.cart.cartItems}
          renderItem={({ item, index }) => (
            <View style={styles.card}>
              <View style={styles.details}>
                <Text style={styles.title}>{item.item.modal}</Text>
                <Text style={styles.subtitle}>{item.item.year}</Text>
                <Text style={styles.subtitle}>{item.item.name}</Text>
                <Text style={styles.price}>{item.item.price} Lakhs</Text>
              </View>
              <View style={styles.quantityContainer}>
                <Text style={styles.quantityText}>Quantity: {item.quantity}</Text>
              </View>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.buttonText} onPress={() => {
                  this.props.removeFromCart(item.item)
                }}> - </Text>
              </TouchableOpacity>
            </View>
          )} />
      </View>);
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart
});

const actions = { addToCart, removeFromCart };

export default connect(mapStateToProps, actions)(CartListsClass);

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
  quantityContainer: {
    backgroundColor: "#E0E0E0", // Light grey background for quantity
    padding: 8,
    borderRadius: 8,
    marginRight: 10,
  },
  quantityText: {
    color: "#333",
    fontWeight: "bold",
  },
});
