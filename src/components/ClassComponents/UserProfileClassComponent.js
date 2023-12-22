import {Text, StyleSheet, View, ScrollView} from 'react-native';
import React, {Component} from 'react';
import UserBasicInfo from './UserBasicInfo';
import UserContactInfo from './UserContactInfo';
import UserEducationInfo from './UserEducationInfo';

export default class UserProfileClassComponent extends Component {
    render() {
        const {basicInfo, contactInfo, educationInfo} = this.props.userObject;


        const renderBasicInfo = () => {
            if (basicInfo !== undefined)
            {
                return <UserBasicInfo basicInfo={basicInfo} styles={styles}/>;
            }

            return null;
        };

        const renderContactInfo = () => {
            if (contactInfo !== undefined)
            {
                return <UserContactInfo contactInfo={contactInfo} styles={styles}/>;
            }

            return null;
        };

        const renderEducationInfo = () => {
            if (educationInfo !== undefined)
            {
                return <UserEducationInfo educationInfo={educationInfo} styles={styles}/>;
            }

            return null;
        };

        return (
            <ScrollView>
                <View style={{
                    backgroundColor: '#e0ffff', width: '100%', flex: 0,
                    justifyContent: 'center',
                    alignItems: 'center'

                }}>
                    <View style={{
                        backgroundColor: 'white', width: '90%', padding: 10, borderColor: 'red', borderRadius: 5,
                        margin: 5
                    }}>
                        {renderBasicInfo()}

                    </View>
                    <View style={{
                        backgroundColor: 'white', width: '90%', padding: 10, borderColor: 'red', borderRadius: 5,
                        margin: 5
                    }}>

                        {renderContactInfo()}

                    </View>
                    <View style={{
                        backgroundColor: 'white', width: '90%', padding: 10, borderColor: 'red', borderRadius: 5,
                        margin: 5
                    }}>
                        {renderEducationInfo()}
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    textInputCommon: {
        flex: 1,
        backgroundColor: '#c0c0c0',
        marginLeft: 10,
        borderRadius: 40,
        textAlign: 'center',
    },
    textCommon: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlignVertical: 'center', width: '30%',
        textAlign: 'center',
    }
    , titles: {
        fontSize: 20, fontWeight: 'bold', backgroundColor: '#8fbc8f', textAlign: 'center',
        marginVertical: 10,
        borderRadius: 10,
        paddingVertical: 10,
    }

});


