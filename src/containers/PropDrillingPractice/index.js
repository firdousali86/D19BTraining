import { View, Text, FlatList } from 'react-native';
import React from 'react';
import BodyView from './BodyView';
import HeaderView from './HeaderView';
const PropDrillingPractice = () => {
    return (
        <View style={{ flex: 1 }}>
            <HeaderView />
            <BodyView />
        </View>
    );
};

export default PropDrillingPractice;
