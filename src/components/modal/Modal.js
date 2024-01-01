
import React, {useState} from 'react';
import {Button, View, Text} from 'react-native';
import Modal from 'react-native-modal';

const ModalComponentTab = () => {
  const [showModal, setModal] = useState(false);

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Button
          title="Show modal"
          onPress={() => {
            setModal(true);
          }}
        />
      </View>

      <Modal
        isVisible={showModal}
        style={{justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: 'white',
            padding: 20,
            borderRadius: 10,
            width: 300,
            height: 200,
          }}>
          <View style={{flex: 1}}>
            <Text>Hello!</Text>
          </View>
          <View>
            <Button
              title="Hide modal"
              onPress={() => {
                setModal(false);
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalComponentTab;
