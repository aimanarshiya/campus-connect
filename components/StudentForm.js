import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";

export default function StudentForm(){
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [rollNumber, setRollNumber] = useState("");
    const [collegeName, setCollegeName] = useState("");
    const [department, setDepartment] = useState("");
    const [section, setSection] = useState("");
    const [year, setYear] = useState("");
    const [userPass, setUserPass] = useState("");
    const [submitted, setSubmitted] = useState(null);

    function handleRegistration(){
        if(!userName || !email || !rollNumber || !collegeName || !department || !section || !year || !userPass){
            alert("Please fill all fields");
            return;
        }

        setSubmitted({
            userName, email, rollNumber, collegeName, department, branch, section, year
        });

        alert("Registration Successful");

        setUserName("");
        setEmail("");
        setRollNumber("");
        setCollegeName("");
        setDepartment("");
        setSection("");
        setYear("");
        setUserPass("");
    };

    return(
        <View style={styles.form}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
                style={styles.input}
                value={userName}
                placeholder="Enter your name"
                onChangeText={setUserName}
            />

            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                value={email}
                placeholder="Enter your email"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={setEmail}
            />

            <Text style={styles.label}>Roll Number</Text>
            <TextInput
                style={styles.input}
                value={rollNumber}
                placeholder="Enter roll number"
                keyboardType="numeric"
                onChangeText={setRollNumber}
            />

            <Text style={styles.label}>College Name</Text>
            <TextInput
                style={styles.input}
                value={collegeName}
                placeholder="Enter college name"
                onChangeText={setCollegeName}
            />

            <Text style={styles.label}>Department</Text>
            <TextInput
                style={styles.input}
                value={department}
                placeholder="Enter department"
                onChangeText={setDepartment}
            />

         

            <Text style={styles.label}>Section</Text>
            <TextInput
                style={styles.input}
                value={section}
                placeholder="Enter section"
                onChangeText={setSection}
            />

            <Text style={styles.label}>Year</Text>
            <TextInput
                style={styles.input}
                value={year}
                placeholder="Enter year (e.g. 3rd Year)"
                onChangeText={setYear}
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.input}
                value={userPass}
                placeholder="Enter your password"
                secureTextEntry
                onChangeText={setUserPass}
            />

            <TouchableOpacity style={styles.button} onPress={handleRegistration}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>

            {submitted && (
                <View style={styles.previewBox}>
                    <Text style={styles.previewTitle}>Registered Details</Text>
                    <Text style={styles.previewText}>Name: {submitted.userName}</Text>
                    <Text style={styles.previewText}>Email: {submitted.email}</Text>
                    <Text style={styles.previewText}>Roll No: {submitted.rollNumber}</Text>
                    <Text style={styles.previewText}>College: {submitted.collegeName}</Text>
                    <Text style={styles.previewText}>Department: {submitted.department}</Text>
                    <Text style={styles.previewText}>Section: {submitted.section}</Text>
                    <Text style={styles.previewText}>Year: {submitted.year}</Text>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    form:{
        gap:12,
    },
    label:{
        fontSize:14,
        fontWeight:"600",
        color:"#333333",
        marginBottom:-6,
    },
    input:{
        borderWidth:1,
        borderColor:"#CCCCCC",
        borderRadius:8,
        padding:12,
        fontSize:15,
        backgroundColor:"#FFFFFF",
    },
    button:{
        backgroundColor:"#138a4a",
        borderRadius:8,
        padding:14,
        alignItems:"center",
        marginTop:10,
    },
    buttonText:{
        color:"#FFFFFF",
        fontSize:16,
        fontWeight:"bold",
    },
    previewBox:{
        marginTop:20,
        padding:16,
        backgroundColor:"#EAF7EF",
        borderRadius:8,
        borderWidth:1,
        borderColor:"#138a4a",
        gap:4,
    },
    previewTitle:{
        fontSize:16,
        fontWeight:"bold",
        color:"#138a4a",
        marginBottom:6,
    },
    previewText:{
        fontSize:14,
        color:"#333333",
    },
})