// components/Footer.js
import { View, Text, StyleSheet } from "react-native";

export default function Footer(){
    return(
        <View style={styles.footer}>
            <Text style={styles.text}>© 2026 Campus Connect. All rights reserved.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer:{
        paddingVertical:14,
        alignItems:"center",
        justifyContent:"center",
        borderTopWidth:1,
        borderTopColor:"#EEEEEE",
    },
    text:{
        fontSize:12,
        color:"#888888",
    },
})