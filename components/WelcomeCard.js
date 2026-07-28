import { StyleSheet, Text, View } from 'react-native';
export default function WelcomeCard(){
    return(
        <View style={styles.card}>
            <Text 
            style={styles.title} >
                welcome student
            </Text>
            <Text>
                have a great learning
            </Text>
        </View>
    )
}
const styles=StyleSheet.create({
    card:{
        backgroundColor:"#D2691E",
        padding:40,
        borderRadius:20,
        margin:30,

    },
    title:{
        fontSize:10,
        fontWeight:"bold",
    },

});