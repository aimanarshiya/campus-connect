import { StyleSheet, Text, View } from 'react-native';
export default function WelcomeCard(props){
    let name = "Aiman Arshiya"
    return(
        <View style={styles.card}>
            <Text 
            style={styles.title} >
                welcome {props.name}
            </Text>
            <Text>
                Department{props.dept}
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