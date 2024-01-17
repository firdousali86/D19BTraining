import React from "react";
import { Text, View } from "react-native";

class ProductsListsClass extends React.Component {

    constructor(props) {
        super(props)
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
            <View><Text>This is a Test</Text></View>
        );
    }
}

export default ProductsListsClass;