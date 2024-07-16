import { useState } from "react";
import { View, Text, Image } from "react-native";
import styles from "../styles/authStylesheet";
import logo from "../assets/logo.png";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";

export const Auth = () => {

    const [isLogin, setIsLogin] = useState(true);

    const changeForm = () => {
        setIsLogin((prevIsLogin) => !prevIsLogin);
    };

    return (
        <View style={styles.view}>
            <Image source={logo} style={styles.logo} />
            {isLogin ? (
                <LoginForm changeForm={changeForm} />
            ) : (
                <RegisterForm changeForm={changeForm} />
            )}
        </View>
    );
};