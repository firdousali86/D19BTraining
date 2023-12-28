import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';
import Modal from 'react-native-modal';

const TestModalScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  renderModal = () => {
    return (
      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1, fontColor: "white" }}>
          <Text style={{ fontColor: "white" }}>This is a test modal</Text>
        </View>
        <Button
          title={'Hide'}
          onPress={() => {
            setIsModalVisible(false);
          }}
        />
      </Modal>
    );
  };

  return (
    <View>
      <Text>This is a Modal Screen</Text>
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
    borderRadius: 8,
  }
});
