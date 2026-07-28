import { StyleSheet, Text, View, Button } from 'react-native';
import {useState} from "react";


export default function WelcomeCard(){

    // let name = "Aiman Arshiya"
    const [name,setName] = useState("Aiman");
    const [dept,setDept] = useState("CSE");

    return(
        <View style={styles.card}>
            <Text 
            style={styles.title} >
                welcome {name}
            </Text>
           
            <Text>
                Have a great learning!.
            </Text>
            <Button title="change name" 
                onPress={() =>setName("Revathi")}
            />
            <Text>
                Department{dept}
            </Text>
            <Button title="change dept" 
                onPress={() =>setDept("ECE")}
            />
            
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