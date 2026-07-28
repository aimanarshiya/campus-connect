import { StyleSheet, Text, View } from 'react-native';

export default function Footer(){
    return(
        <View style={styles.container}>
            <Text 
            style={styles.title} >
                All rights Reserved!.
            </Text>
            <Text>
                copyrights@2026
            </Text>
        </View>
    )
}


const styles=StyleSheet.create({
    container:{
        padding:20,
        backgroundColor:"#2563EB",
    },
    title:{
        color:"#fff",
        fontSize:24,
        fontWeight:"bold",
    },
}); 