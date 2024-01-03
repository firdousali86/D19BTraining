import { Button, Text, View } from 'react-native';
import React, { Component, PureComponent, memo } from 'react';
import _ from 'lodash';

export class SampleClassComp extends Component {
    constructor(props) {
        super(props);

        this.state = { datetime: undefined };
    }

    //   shouldComponentUpdate(nextProps, nextState) {
    //     console.log('should component update called');

    //     // return nextProps.enteredText !== this.props.enteredText;
    //     return (
    //       !_.isEqual(this.props, nextProps) || !_.isEqual(this.state, nextState)
    //     );
    //   }

    //   componentDidUpdate() {
    //     console.log('did update');
    //   }

    render() {
        console.log('child class comp rerendered');

        const { enteredText } = this.props;

        return (
            <View style={{ backgroundColor: 'yellow' }}>
                <Text>this is very simple class comp</Text>
                <Text>{enteredText}</Text>
                <Text>{this.state.datetime}</Text>

                <Button
                    title={'Update date'}
                    onPress={() => {
                        this.setState({ datetime: Date() });
                    }}
                />
            </View>
        );
    }
}

export default memo(SampleClassComp, (prevProps, nextProps) => {
    return prevProps.enteredText === nextProps.enteredText;
});