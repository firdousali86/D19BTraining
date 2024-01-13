import React from "react";
import { FlatList, Text, TouchableOpacity, View, StyleSheet, Animated, Easing } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../features/cart/CartSlice";

const CartLists = () => {
  const fadeAnim = new Animated.Value(0);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const renderListItem = ({ item: { item, quantity } }) => (
    <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
      <View style={styles.details}>
        <Text style={styles.title}>{item.modal}</Text>
        <Text style={styles.subtitle}>{item.year}</Text>
        <Text style={styles.subtitle}>{item.name}</Text>
        <Text style={styles.price}>{item.price} Lakhs</Text>
      </View>
      <View style={styles.quantityContainer}>
        <Text style={styles.quantityText}>Quantity: {quantity}</Text>
      </View>
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => {
          dispatch(removeFromCart(item));
        }}
      >
        <Text style={styles.buttonText}>Remove From Cart</Text>
      </TouchableOpacity>
    </Animated.View>
  );

  return (
    <FlatList
      data={cartItems}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderListItem}
    />
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
    backgroundColor: "#FFD700", // Golden color
    borderRadius: 12,
    elevation: 4,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#333",
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 2,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#8d8a8a",
    marginTop: 8,
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
  removeButton: {
    backgroundColor: "#29752c", // Green color
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default CartLists;
