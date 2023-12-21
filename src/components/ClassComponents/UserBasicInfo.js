import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import UserBasicInfoList from './UserBasicInfoList';

class UserBasicInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: props.basicInfo?.firstName,
            lastName: props.basicInfo?.lastName,
            gender: props.basicInfo?.gender,
            DOB: props.basicInfo?.DOB,
        };
    }

    render() {
        const {firstName} = this.state;
        const {lastName} = this.state;
        const {gender} = this.state;
        const {DOB} = this.state;
        console.log(this.state)
        return (
            <View>
                <View style={style.direction}>
                    <Text style={style.lable}>First Name: </Text>
                    <TextInput
                        style={style.textInput}
                        placeholder="First Name"
                        value={firstName}
                        onChangeText={changedText => {
                            this.setState({firstName: changedText});
                        }}
                    />
                </View>
                <View style={style.direction}>
                    <Text style={style.lable}>Last Name: </Text>
                    <TextInput
                        style={style.textInput}
                        placeholder="Last Name"
                        value={lastName}
                        onChangeText={changedText => {
                            this.setState({lastName: changedText});
                        }}
                    />
                </View>
                <View style={style.direction}>
                    <Text style={style.lable}>Gender: </Text>
                    <TextInput
                        style={style.textInput}
                        placeholder="Last Name"
                        value={gender}
                        onChangeText={changedText => {
                            this.setState({gender: changedText});
                        }}
                    />
                </View>
                <View style={style.direction}>
                    <Text style={style.lable}>DOB: </Text>
                    <TextInput
                        style={style.textInput}
                        placeholder="Last Name"
                        value={DOB}
                        onChangeText={changedText => {
                            this.setState({DOB: changedText});
                        }}
                    />
                </View>
                <View>
                    <UserBasicInfoList updatedInfo={this.state}/>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    lable: {
        width: 100,
        marginVertical: 15,
        marginLeft: 5,
        fontWeight: 'bold',
        fontSize: 18,
        borderBottomWidth: 1,
        borderColor: '#000',
    },
    direction: {
        flexDirection: 'row'
    },
    textInput: {
        backgroundColor: 'lightgrey', marginHorizontal: 10, flex: 1
    }
});

export default UserBasicInfo;
