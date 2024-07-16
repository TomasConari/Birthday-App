import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from "../styles/formStylesheet";

export default loginForm = ({ changeForm }) => {
    return (
        <View>
            <Text>loginForm</Text>
            <TouchableOpacity onPress={changeForm}>
                <Text style={styles.btnText}>Register</Text>
            </TouchableOpacity>
        </View>
    );
};