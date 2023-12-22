import React from 'react';
import { Text, Button, View } from 'react-native';

class TestClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { newText: 'this is initial new text', bgColor: props.bgColor };

    console.log(props);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('i am getting update calls');
  //   console.log('COMPONENTDIDUPDATE');

  //   console.log(prevProps); //previous
  //   console.log(this.props); //new props

  //   if (prevProps.bgColor !== this.props.bgColor) {
  //     this.setState({bgColor: this.props.bgColor});

  //     // this.state.bgColor = this.props.bgColor;

  //     // this.forceUpdate()
  //   }
  // }

  render() {
    const { bgColor } = this.state;

    console.log('test class component rerendered');

    return (
      <View style={{ backgroundColor: bgColor }}>
        <Text>this is my first class component</Text>
        <Text>{this.state.newText}</Text>
        <Button
          title="Class Button"
          onPress={() => {
            console.log('button was clicked');

            this.setState({ newText: 'hey this button was tapped' });

            console.log(this.props);
          }}
        />

        <Button
          title="Class Button: change BG to Yellow"
          onPress={() => {
            this.setState({ bgColor: 'red' });
          }}
        />
        <Button
          title="Class Button: change BG to White"
          onPress={() => {
            this.setState({ bgColor: 'blue' });
          }}
        />
      </View>
    );
  }
}

export default TestClassComponent;
