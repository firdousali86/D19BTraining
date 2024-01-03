import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PersonalDetails from '../details/PersonalDetails'
import ContactDetails from '../details/ContactDetails'
import EducationDetails from '../details/EducationDetails'

const HeaderView = () => {
    return (
        <View style={{ flex: 0.4, backgroundColor: 'gray', flexDirection: "row" }}>
            <View style={{ width: 150, height: 150 }}></View>
            <View style={{ flex: 1, backgroundColor: 'pink' }}>
                <PersonalDetails />
                <ContactDetails />
                <EducationDetails />
            </View>
        </View>

    )
}

export default HeaderView

const styles = StyleSheet.create({})