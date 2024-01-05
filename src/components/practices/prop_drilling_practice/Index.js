import React from 'react';
import { View, StyleSheet } from 'react-native';
import HeaderView from './layout/HeaderView';
import BodyView from './layout/BodyView';

const userObject = {
	gender: 'Male',
	address: 'AXC',
	phone: '+91 9865328585',
	degree: 'PHD OF MATH',
	university: 'FD',
	name: 'Flash',
	age: '23',
	favCars: [
		{ brand: 'BMW', modal: 'MX', year: '2012' },
		{ brand: 'Chevrolet', modal: 'RMX', year: '2024' },
		{ brand: 'Lexus RX', modal: 'MX-8', year: '2355' },
		{ brand: 'Ford g t', modal: 'M-85-X', year: '2028' },
		{ brand: 'Lincoln Nautilus', modal: 'AW-MX', year: '2019' },
	],
}
const PropDrillingPractice = () => {
	console.log('Root render');
	return (
		<View style={{ flex: 1 }}>
			<HeaderView userObject={userObject} />
			<BodyView userObject={userObject} />
		</View>
	);
};

const Style = StyleSheet.create({});

export default PropDrillingPractice;
