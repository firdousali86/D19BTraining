import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import HeaderView from './layout/HeaderView';
import BodyView from './layout/BodyView';
import { UserContextProvider } from '../../master/contextApi/userContext';

const PropDrillingPractice = () => {


	const [userObject, setUserObject] = useState({
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
	})
	console.log('Root render');
	return (
		<View style={{ flex: 1 }}>
			<UserContextProvider userObject={userObject}>
				<HeaderView />
				<BodyView />
			</UserContextProvider>

			<Button title='Age Change' onPress={() => {
				console.log('chnage');
				const userObjectCopy = { ...userObject }
				userObjectCopy.age = 36;
				setUserObject(userObjectCopy)
			}} />
		</View>
	);
};

const Style = StyleSheet.create({});

export default PropDrillingPractice;
