import { StyleSheet, Platform } from "react-native";
import colors from "../utils/colors";

export default styles = StyleSheet.create({
    btnText: {
        color: colors.FONT_COLOR,
        fontSize: 18,
    },
    input: {
        height: 50,
        color: colors.FONT_COLOR,
        width: "80%",
        marginBottom: Platform.OS === "android" ? 25 : 20,
        backgroundColor: "#1e3040",
        paddingHorizontal: 20,
        borderRadius: 50,
        fontSize: 18,
        borderWidth: 1,
        borderColor: "#1e3040"
    },
    login: {
        flex: 1,
        justifyContent: "flex-end",
        marginBottom: "5%"
    },
    errorInput: {
        borderColor: "#940c0c",
    },
});