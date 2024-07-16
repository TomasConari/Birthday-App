import { Modal, TouchableOpacity } from "react-native";
import { View, Text } from 'react-native'
import React from 'react';
import styles from "../styles/modalStylesheet";

export const ErrorModal = ({ modalVisible, setModalVisible, errorMessage }) => {
    return (
        <>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>{errorMessage}</Text>
                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Got it</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    );
};