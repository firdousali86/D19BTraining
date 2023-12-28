import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Button} from 'react-native';
import Modal from 'react-native-modal';
const ModalScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text>Main Content</Text>
      <Button title="Open Modal" onPress={openModal} />

      <Modal isVisible={modalVisible} onBackdropPress={closeModal}>
        <View style={styles.modalContainer}>
          <Text>This is a Modal</Text>
          <Button
            title="Close Modal"
            style={styles.closeButton}
            onPress={closeModal}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  closeButton: {
    margin: 20,
  },
});

export default ModalScreen;
