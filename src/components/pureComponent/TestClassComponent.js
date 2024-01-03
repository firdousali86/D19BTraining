import React, {Component, PureComponent, memo} from 'react';
import {View, Text} from 'react-native';
import _ from 'lodash';
import { TextInput } from 'react-native-gesture-handler';




export class TestClassComponent extends Component {


  constructor(props){
    super(props)
    console.log(props.enterText)

  }


// shouldComponerntUpdate(nextProps , nextState){



// console.log(_.isEqual(this.props,nextProps))

  

// return !_.isEqual(this.props,nextProps)||!_.isEqual(this.state,nextState);


//   return nextProps.enterText !== this.props.enterText;
// }



  render() {
    

    return (
      <View>

        <Text> class component</Text>
      </View>
    );
  }
}

export default memo(TestClassComponent ,(prevpropse,nextPropse) =>{

return prevpropse.enterTExtTwo == nextPropse.enterTExtTwo
});
