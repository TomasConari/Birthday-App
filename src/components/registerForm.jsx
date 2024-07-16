import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import styles from "../styles/formStylesheet";
import { emailValidation } from "../utils/validations";
import { ErrorModal } from "./ErrorModal";
import { auth, createUserWithEmailAndPassword } from "../utils/firebase";

export default registerForm = ({ changeForm }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [formError, setFormError] = useState({ errors: {}, firstError: "" });
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        verifyPassword: ""
    });

    const register = async () => {
        let errors = {};
        let firstError = "";
        if (!formData.email || !formData.password || !formData.verifyPassword) {
            if (!formData.email) errors.email = true;
            if (!formData.password) errors.password = true;
            if (!formData.verifyPassword) errors.verifyPassword = true;
            firstError = "Please fill out all the form fields";
        } else if (!emailValidation(formData.email)) {
            errors.email = true;
            firstError = "Please enter a valid email address";
        } else if (formData.password !== formData.verifyPassword) {
            errors.password = true;
            errors.verifyPassword = true;
            firstError = "Passwords do not match";
        } else if (formData.password.length < 6) {
            errors.password = true;
            errors.verifyPassword = true;
            firstError = "Password must be more than 6 characters long";
        } else {
            try {
                await createUserWithEmailAndPassword(auth, formData.email, formData.password);
                console.log('User created successfully!');
            } catch (error) {
                console.error("Error creating user:", error);
                switch (error.code) {
                    case "auth/email-already-in-use":
                        errors.email = true;
                        firstError = 'Email already in use';
                        break;
                    case 'auth/invalid-email':
                        errors.email = true;
                        firstError = 'Invalid email address';
                        break;
                    case 'auth/weak-password':
                        errors.password = true;
                        errors.verifyPassword = true;
                        firstError = 'Password must be at least 6 characters long';
                        break;
                    default:
                        firstError = 'An unknown error occurred';
                        break;
                }
            }
        };
        setFormError((prevFormError) => ({
            ...prevFormError,
            errors,
            firstError
        }));
        if (firstError.length > 0) {
            setModalVisible(true);
        };
    };

    const storeInputs = (key, value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [key]: value
        }));
    };

    return (
        <>
            <ErrorModal modalVisible={modalVisible} setModalVisible={setModalVisible} errorMessage={formError.firstError} />
            <TextInput
                style={[styles.input, formError.errors.email && styles.errorInput]}
                placeholder="E-Mail"
                placeholderTextColor="#969696"
                onChange={(event) => storeInputs("email", event.nativeEvent.text)}
            />
            <TextInput
                style={[styles.input, formError.errors.password && styles.errorInput]}
                placeholder="Password"
                placeholderTextColor="#969696"
                secureTextEntry={true}
                onChange={(event) => storeInputs("password", event.nativeEvent.text)}
            />
            <TextInput
                style={[styles.input, formError.errors.verifyPassword && styles.errorInput]}
                placeholder="Verify Password"
                placeholderTextColor="#969696"
                secureTextEntry={true}
                onChange={(event) => storeInputs("verifyPassword", event.nativeEvent.text)}
            />
            <TouchableOpacity onPress={register}>
                <Text style={styles.btnText}>Create Account</Text>
            </TouchableOpacity>
            <View style={styles.login}>
                <TouchableOpacity onPress={changeForm}>
                    <Text style={styles.btnText}>Log In</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};
