import {Text, View} from 'react-native';
import React, {Component} from 'react';
import _ from 'lodash';

export class SampleClassComp extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextProps);

    // return nextProps.enteredText !== this.props.enteredText;
    return !_.isEqual(this.props, nextProps);
  }

  //   componentDidUpdate() {
  //     console.log('did update');
  //   }

  render() {
    console.log('child class comp rerendered');

    const {enteredText} = this.props;

    return (
      <View>
        <Text>this is very simple class comp</Text>
        <Text>{enteredText}</Text>
      </View>
    );
  }
}

export default SampleClassComp;
