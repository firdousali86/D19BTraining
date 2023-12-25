import React from 'react';
import {View, Text, TextInput} from 'react-native';

class UserContactInfo extends React.Component {
    render() {
        const {contactInfo, styles} = this.props;

        return (
            <View>
                <Text style={styles.titles}>
                    Contact Info
                </Text>
                <View style={{flexDirection: 'row', marginTop: 5}}>
                    <Text style={styles.textCommon}>Email: </Text>
                    <Text
                        style={{...styles.textInputCommon, paddingVertical: 5, paddingHorizontal: 4}}
                    >{contactInfo?.email}</Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: 5}}>
                    <Text style={styles.textCommon}>Address:</Text>
                    <Text
                        style={{...styles.textInputCommon, paddingVertical: 5, paddingHorizontal: 4}}
                    >{contactInfo?.address}</Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: 5}}>
                    <Text style={styles.textCommon}>Email: </Text>
                    <Text
                        style={{...styles.textInputCommon, paddingVertical: 5, paddingHorizontal: 4}}
                    >{contactInfo?.email}</Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: 5}}>
                    <Text style={styles.textCommon}>City: </Text>
                    <Text
                        style={{...styles.textInputCommon, paddingVertical: 5, paddingHorizontal: 4}}
                    >{contactInfo?.city}</Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: 5}}>
                    <Text style={styles.textCommon}>Country: </Text>
                    <Text
                        style={{...styles.textInputCommon, paddingVertical: 5, paddingHorizontal: 4}}
                    >{contactInfo?.country}</Text>
                </View>
            </View>
        );
    }
}

export default UserContactInfo;
