import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

class UserBasicInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: props.basicInfo?.firstName,
            lastName: props.basicInfo?.lastName,
            styles: props.styles,
        };
    }

    render() {
        const {basicInfo} = this.props;
        const {firstName, lastName, styles} = this.state;

        return (
            <View>
                <Text style={styles.titles}>Basic
                    Info
                </Text>
                <View style={{flexDirection: 'row', marginTop: 5}}>
                    <Text style={styles.textCommon}>First Name:</Text>
                    <TextInput style={{...styles.textInputCommon, backgroundColor: 'white', borderWidth: .5}}
                               placeholder={firstName}
                               value={firstName}
                               onChangeText={(changedText) => {
                                   this.setState({firstName: changedText});
                               }}
                    />

                </View>
                <View style={{flexDirection: 'row', marginTop: 5}}>
                    <Text style={styles.textCommon}>Last Name:</Text>
                    <TextInput
                        style={{
                            ...styles.textInputCommon, backgroundColor: 'white', borderWidth: .5
                        }} //using spread object to copay this style and other style include
                        placeholder={lastName}
                        value={lastName}
                        onChangeText={(changedText) => {
                            this.setState({lastName: changedText});
                        }}
                    />
                </View>
                <View style={{flexDirection: 'row', marginTop: 5}}>
                    <Text style={styles.textCommon}>Gender:</Text>
                    <Text
                        style={{...styles.textInputCommon, paddingVertical: 12, paddingHorizontal: 4}}
                    >{basicInfo?.gender}</Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: 5}}>
                    <Text style={styles.textCommon}>DOB:</Text>
                    <Text
                        style={{...styles.textInputCommon, paddingVertical: 12, paddingHorizontal: 4}}
                    >{basicInfo?.DOB}</Text>
                </View>
            </View>
        );
    }
}

export default UserBasicInfo;
