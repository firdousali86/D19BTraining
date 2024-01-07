import React from "react";
import { Text, View } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list'
import { getThemeContext } from '../../../master/contextApi/SettingContextApi'

const SettingTab3 = props => {
    const [selected, setSelected] = React.useState("");
    const { state: { customThemeObj }, actions: { setCustomTheme } } = getThemeContext();

    const data = [
        { key: '1', value: 'orange' },
        { key: '2', value: 'pink' },
        { key: '3', value: 'red' },
        { key: '4', value: 'default' },
    ]

    return (
        <View style={{flex:1, backgroundColor:customThemeObj.bgColor}}>
            <Text>
                S T 3
            </Text>
            <SelectList
                setSelected={(val) => setSelected(val)}
                data={data}
                save="value"
                onSelect={() => setCustomTheme(selected)}
                label="Categories"

            />
        </View>
    );
}

export default SettingTab3;