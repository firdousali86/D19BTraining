import React from 'react';
import {View, Text, TextInput} from 'react-native';

class UserEducationInfo extends React.Component {
    render() {
        const {educationInfo, styles} = this.props;

        return (

            <View>
                <Text style={styles.titles}>
                    Education Info
                </Text>
                <View style={{flexDirection: 'row', marginTop: 5}}>
                    <Text style={styles.textCommon}>University: </Text>
                    <Text
                        style={{...styles.textInputCommon, paddingVertical: 12, paddingHorizontal: 4}}
                    >{educationInfo?.lastDegree}</Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: 5}}>
                    <Text style={styles.textCommon}>Last Degree: </Text>
                    <Text
                        style={{...styles.textInputCommon, paddingVertical: 12, paddingHorizontal: 4}}
                    >{educationInfo?.university}</Text>
                </View>
            </View>

        );
    }
}

export default UserEducationInfo;
