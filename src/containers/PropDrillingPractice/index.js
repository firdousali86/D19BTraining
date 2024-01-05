import { View, Text, FlatList, Button } from 'react-native';
import React, { useState } from 'react';
import BodyView from './BodyView';
import HeaderView from './HeaderView';
import { UserContextProvider } from '../../contexts/UserContext';

const PropDrillingPractice = () => {
    console.log("Root view renderd");
    const [userObject, setUserObject] = useState({

        firstName: 'Naresh',
        lastName: 'Malaviya',
        age: 32,
        gender: 'Male',
        address: 'Nikol',
        phone: '123456789',
        city: 'Ahmedabad',
        country: 'India',
        email: "test@gmail.com",
        degree: "BE",
        university: "GTU",
        favCars: [
            { brand: "KIA", model: "2019", color: "White" },
            { brand: "BMW", model: "2020", color: "Red" },
            { brand: "XUV", model: "2021", color: "White" },
            { brand: "AUDI", model: "2022", color: "Silver" },
            { brand: "VOLVO", model: "2023", color: "Black" }
        ],

    });
    return (
        <View style={{ flex: 1 }}>
            <UserContextProvider userObject={userObject}>
                <HeaderView />
                <BodyView />
            </UserContextProvider>


            <Button title={'Change Age'} onPress={() => {
                const userObjectCopy = { ...userObject };
                userObjectCopy.age = 34;
                setUserObject(userObjectCopy);
            }} />
        </View>
    );
};

export default PropDrillingPractice;
