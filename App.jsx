import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import firebase, { auth } from "./src/utils/firebase";
import { useEffect, useState } from "react";
import { Auth } from "./src/components/Auth";
import styles from "./src/styles/appStylesheet";

export default function App() {

    const [user, setUser] = useState(undefined);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user);
        });
    }, []);

    if (user === undefined) return null;

    return (
        <>
            <StatusBar style="light" />
            <SafeAreaView style={styles.background}>
                {user ? <Text>Logged In</Text> : <Auth />}
            </SafeAreaView>
        </>
    );
};