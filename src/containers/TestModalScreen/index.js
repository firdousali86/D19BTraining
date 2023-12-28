import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';

const TestModalScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  renderModal = () => {
    return (
      <Modal isVisible={isModalVisible}>
        <View style={{width: 200, height: 200, backgroundColor: 'white'}}>
          <View style={{flex: 1}}>
            <Text>I am the modal content!</Text>
          </View>
          <Button
            title={'Hide'}
            onPress={() => {
              setIsModalVisible(false);
            }}
          />
        </View>
      </Modal>
    );
  };

  return (
    <View>
      <Text>index</Text>

      {renderModal()}
      <Button
        title={'Show modal'}
        onPress={() => {
          setIsModalVisible(true);
        }}
      />
    </View>
  );
};

export default TestModalScreen;

const styles = StyleSheet.create({});
