import React, {memo, useEffect, useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import FastImage from 'react-native-fast-image';

import _ from 'lodash';

const TestFunctionalComponent = props => {
  const [getChild, setChild] = useState();
  console.log('fun component');

  useEffect(() => {
    console.log('chaneg prope');
  }, [props.enterTExtTwo]);

  return (
    <View>
      <TextInput
        placeholder="child fun component "
        onChangeText={nk => {
          setChild(nk);
        }}
        value={getChild}
      />

      <Button
        title="Button handler usecallback"
        onPress={() => {
      
          props.buttonHandler();
        }}
      />

      <Text>test Functional component</Text>

      {/* <FastImage
        style={{width: 200, height: 200}}
        source={{
          uri: 'https://picsum.photos/200/300?random=1',
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      /> */}
    </View>
  );
};

export default memo(TestFunctionalComponent);

// export default memo(TestFunctionalComponent, (prevPropse, nextProps) => {

//   return prevPropse.enterText == nextProps.enterTExtTwo;
// });