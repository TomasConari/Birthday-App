import { StyleSheet, Platform } from "react-native";
import colors from "../utils/colors";

export default styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: "center"
    },
    logo: {
        width: 190,
        height: 140,
        marginTop: Platform.OS === "android" ? 55 : 30,
        marginBottom: 50
    }
});