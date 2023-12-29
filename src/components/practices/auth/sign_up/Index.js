import React from "react";
import { Button, Text, View } from "react-native";

const SignUp = props => {
    return (
        <View>
            <Text>This is a SignUp Page.</Text>

            <Button
                title="Move To Login Page"
                onPress={() => props.navigation.navigate('Login')}
            />
        </View>
    );
}

export default SignUp;