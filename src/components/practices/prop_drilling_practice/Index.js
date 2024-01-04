import React from "react";

import { View, StyleSheet } from "react-native";
import HeaderView from "./layout/HeaderView";
import BodyView from "./layout/BodyView";


const propDrillingPractice = () => {
    return (
        <View style={{ flex: 1 }}>
            <HeaderView />
            <BodyView />
        </View>
    );
}

const Style = StyleSheet.create({});

export default propDrillingPractice;

