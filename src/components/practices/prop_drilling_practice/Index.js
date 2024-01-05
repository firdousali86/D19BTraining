import React from 'react';
import { View, StyleSheet } from 'react-native';
import HeaderView from './layout/HeaderView';
import BodyView from './layout/BodyView';

const userObject = {
	gender : 'Male',
	address : 'AXC',
	phone : '+91 9865328585',
	degree : 'PHD OF MATH',
	university : 'FD',
	name : 'Flash',
	age : '23',
	favCars : [ 'BMW', 'Chevrolet', 'Lexus RX', 'Ford g t', 'Lincoln Nautilus' ],
};
const PropDrillingPractice = () =>
{
	return (
		<View style={ { flex : 1 } }>
            <HeaderView userObject={ userObject }/>
            <BodyView/>
        </View>
	);
};

const Style = StyleSheet.create( {} );

export default PropDrillingPractice;
