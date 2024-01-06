import { StyleSheet, Text, View, Switch } from 'react-native'
import React, { useState } from 'react'
import { UserContextProvider } from '../../contexts/UserContext';
import { useUserContext } from '../../contexts/UserContext';

const Setting = () => {

    const { state, actions } = useUserContext();

    return (
        <>
            <View>

                <Text style={{ paddingTop: 12 }}>Notification {state.isThemEnabled ? 'ON' : 'OFF'}</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={state.isThemEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={actions.toggleThemeSwitch}
                    value={state.isThemEnabled}
                />

            </View>
            <View>

                <Text style={{ paddingTop: 12 }}>Latest Article {state.isArticleEnabled ? 'ON' : 'OFF'}</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={state.isArticleEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={actions.toggleArticleSwitch}
                    value={state.isArticleEnabled}
                />

            </View>
        </>
    )
}

export default Setting

const styles = StyleSheet.create({})