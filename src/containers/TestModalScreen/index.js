import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';
import Modal from 'react-native-modal';

const TestModalScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  renderModal = () => {
    return (
      <Modal isVisible={isModalVisible} style={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
        <View style={{ width: 250, height: 250, backgroundColor: 'white', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
          <View>
            <Text style={{ fontColor: 'black', margin: 10 }}>This is a test modal</Text>
          </View>
          <Button style={styles.modalButton}
            title={'Hide'}
            onPress={() => {
              setIsModalVisible(false);
            }}
          />
        </View>
      </Modal >
    );
  };

  return (
    <View style={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
      <Text style={{ fontColor: 'black', margin: 10 }}>This is a Modal Screen</Text>
      <Button style={styles.modalButton}
        title={'Show modal'}
        onPress={() => {
          setIsModalVisible(true);
        }}
      />
      {renderModal()}
    </View>
  );
};

export default TestModalScreen;

const styles = StyleSheet.create({
  modalButton: {
    backgroundColor: 'yellow',
    marginHorizontal: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    padding: 25,
    borderRadius: 8,
  }
});
