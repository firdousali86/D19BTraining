import React from 'react';
import {Text, Button, View} from 'react-native';

class TestClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {newText: 'this is initial new text'};
  }

  render() {
    console.log('render was rerun');

    return (
      <View style={{backgroundColor: this.state.bgColor}}>
        <Text>this is my first class component</Text>
        <Text>{this.state.newText}</Text>
        <Button
          title="Class Button"
          onPress={() => {
            console.log('button was clicked');

            this.setState({newText: 'hey this button was tapped'});

            console.log(this.props);
          }}
        />

        <Button
          title="Class Button: change BG to Yellow"
          onPress={() => {
            this.setState({bgColor: 'yellow'});
          }}
        />
        <Button
          title="Class Button: change BG to White"
          onPress={() => {
            this.setState({bgColor: 'white'});
          }}
        />
      </View>
    );
  }
}

export default TestClassComponent;
