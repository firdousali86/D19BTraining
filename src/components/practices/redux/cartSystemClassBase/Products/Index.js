import React from "react";
import { Text, View } from "react-native";
import ProductsListsClass from "./ProductsListsClass";

class ProductClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            carsLists: [
                { modal: "Accord", year: 2024, name: "Honda", price: 28000.00 },
                { modal: "Camry", year: 2024, name: "Toyota", price: 30000.00 },
                { modal: "Fusion", year: 2024, name: "Ford", price: 27000.00 },
                { modal: "Altima", year: 2024, name: "Nissan", price: 29000.00 },
                { modal: "Malibu", year: 2024, name: "Chevrolet", price: 26000.00 },
                { modal: "Impreza", year: 2024, name: "Subaru", price: 28000.00 },
                { modal: "Civic", year: 2024, name: "Honda", price: 25000.00 },
                { modal: "Sentra", year: 2024, name: "Nissan", price: 27000.00 },
                { modal: "Optima", year: 2024, name: "Kia", price: 26000.00 },
                { modal: "Mazda3", year: 2024, name: "Mazda", price: 28000.00 }
            ]
        }
    }

    render() {
        const { carsLists } = this.state;

        return (
            <View style={{ flex: 1, backgroundColor: '#d4d6ff' }}>
                <ProductsListsClass itemLists={carsLists} navigation={this.props.navigation} />
            </View>
        );
    };
}

export default ProductClass;