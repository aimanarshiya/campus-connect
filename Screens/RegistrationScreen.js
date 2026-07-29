import { Text, ScrollView, StyleSheet, View } from "react-native";
import StudentForm from "../components/StudentForm";
import { useNavigation } from '@react-navigation/native';

export default function StudentRegistration({navigation}){
    return(
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            <View style={styles.header}>
                <Text style={styles.title}>Student Registration</Text>
                <Text style={styles.subtitle}>Fill in your details to get started</Text>
            </View>
            <StudentForm/>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#F5F7FA",
    },
    content:{
        padding:20,
        paddingBottom:40,
    },
    header:{
        marginBottom:20,
    },
    title:{
        fontSize:26,
        fontWeight:"bold",
        color:"#138a4a",
        marginBottom:4,
    },
    subtitle:{
        fontSize:14,
        color:"#666666",
    },
})