// components/Header.js
import { View, Text, StyleSheet } from "react-native";

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.logo}>🎓 Campus Connect</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:"#138a4a",
        paddingVertical:16,
        paddingHorizontal:20,
        alignItems:"center",
        justifyContent:"center",
    },
    logo:{
        fontSize:20,
        fontWeight:"bold",
        color:"#FFFFFF",
        letterSpacing:0.5,
    },
})