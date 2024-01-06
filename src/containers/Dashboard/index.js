import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { useUserContext } from '../../contexts/UserContext';

const Dashboard = () => {
    const { state } = useUserContext();
    // console.log(state);
    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: 'pink', flex: state.isArticleEnabled ? 0.5 : 1, padding: 5, display: state.isThemEnabled ? 'flex' : 'none' }}>
                <Text style={{ fontSize: 25, fontWeight: '600', marginBottom: 15 }}>Notification</Text>
                <Text>Notification 1</Text>
                <Text>Notification 2</Text>
                <Text>Notification 3</Text>
                <Text>Notification 4</Text>
                <Text>Notification 5</Text>
            </View>
            <View style={{ backgroundColor: '#f9f4d9', flex: state.isThemEnabled ? 0.5 : 1, padding: 5, display: state.isArticleEnabled ? 'flex' : 'none' }}>
                <Text style={{ fontSize: 25, fontWeight: '600', marginBottom: 15 }}>Latest Article</Text>
                <Text>Article 1</Text>
                <Text>Article 2</Text>
                <Text>Article 3</Text>
                <Text>Article 4</Text>
                <Text>Article 5</Text>
            </View>
        </View>
    )
}

export default Dashboard;

const styles = StyleSheet.create({})