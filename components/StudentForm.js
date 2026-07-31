import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";

export default function StudentForm(){
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [rollNumber, setRollNumber] = useState("");
    const [collegeName, setCollegeName] = useState("");
    const [department, setDepartment] = useState("");
    const [section, setSection] = useState("");
    const [year, setYear] = useState("");
    const [userPass, setUserPass] = useState("");
    const [submitted, setSubmitted] = useState(null);

    function handleRegistration(){
        if(!userName || !email || !phone || !rollNumber || !collegeName || !department || !section || !year || !userPass){
            alert("Please fill all fields");
            return;
        }

        if(phone.length !== 10){
            alert("Enter a valid 10-digit phone number");
            return;
        }

        setSubmitted({
            userName, email, phone, rollNumber, collegeName, department, section, year
        });

        alert("Registration Successful");

        setUserName("");
        setEmail("");
        setPhone("");
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
                placeholderTextColor="#999"
                onChangeText={setUserName}
            />

            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                value={email}
                placeholder="Enter your email"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={setEmail}
            />

            <Text style={styles.label}>Phone Number</Text>
            <TextInput
                style={styles.input}
                value={phone}
                placeholder="Enter 10-digit phone number"
                placeholderTextColor="#999"
                keyboardType="number-pad"
                maxLength={10}
                onChangeText={(val) => setPhone(val.replace(/[^0-9]/g, ""))}
            />

            <Text style={styles.label}>Roll Number</Text>
            <TextInput
                style={styles.input}
                value={rollNumber}
                placeholder="Enter roll number"
                placeholderTextColor="#999"
                keyboardType="numeric"
                onChangeText={setRollNumber}
            />

            <Text style={styles.label}>College Name</Text>
            <TextInput
                style={styles.input}
                value={collegeName}
                placeholder="Enter college name"
                placeholderTextColor="#999"
                onChangeText={setCollegeName}
            />

            <Text style={styles.label}>Department</Text>
            <TextInput
                style={styles.input}
                value={department}
                placeholder="Enter department"
                placeholderTextColor="#999"
                onChangeText={setDepartment}
            />

            <Text style={styles.label}>Section</Text>
            <TextInput
                style={styles.input}
                value={section}
                placeholder="Enter section"
                placeholderTextColor="#999"
                onChangeText={setSection}
            />

            <Text style={styles.label}>Year</Text>
            <TextInput
                style={styles.input}
                value={year}
                placeholder="Enter year (e.g. 3rd Year)"
                placeholderTextColor="#999"
                onChangeText={setYear}
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.input}
                value={userPass}
                placeholder="Enter your password"
                placeholderTextColor="#999"
                secureTextEntry
                onChangeText={setUserPass}
            />

            <TouchableOpacity style={styles.button} onPress={handleRegistration} activeOpacity={0.8}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>

            {submitted && (
                <View style={styles.previewBox}>
                    <Text style={styles.previewTitle}>✅ Registered Details</Text>
                    <View style={styles.previewRow}>
                        <Text style={styles.previewLabel}>Name</Text>
                        <Text style={styles.previewValue}>{submitted.userName}</Text>
                    </View>
                    <View style={styles.previewRow}>
                        <Text style={styles.previewLabel}>Email</Text>
                        <Text style={styles.previewValue}>{submitted.email}</Text>
                    </View>
                    <View style={styles.previewRow}>
                        <Text style={styles.previewLabel}>Phone</Text>
                        <Text style={styles.previewValue}>{submitted.phone}</Text>
                    </View>
                    <View style={styles.previewRow}>
                        <Text style={styles.previewLabel}>Roll No</Text>
                        <Text style={styles.previewValue}>{submitted.rollNumber}</Text>
                    </View>
                    <View style={styles.previewRow}>
                        <Text style={styles.previewLabel}>College</Text>
                        <Text style={styles.previewValue}>{submitted.collegeName}</Text>
                    </View>
                    <View style={styles.previewRow}>
                        <Text style={styles.previewLabel}>Department</Text>
                        <Text style={styles.previewValue}>{submitted.department}</Text>
                    </View>
                    <View style={styles.previewRow}>
                        <Text style={styles.previewLabel}>Section</Text>
                        <Text style={styles.previewValue}>{submitted.section}</Text>
                    </View>
                    <View style={[styles.previewRow, { borderBottomWidth: 0 }]}>
                        <Text style={styles.previewLabel}>Year</Text>
                        <Text style={styles.previewValue}>{submitted.year}</Text>
                    </View>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    form:{
        gap:14,
    },
    label:{
        fontSize:13,
        fontWeight:"600",
        color:"#444444",
        marginBottom:-8,
        textTransform:"uppercase",
        letterSpacing:0.5,
    },
    input:{
        borderWidth:1,
        borderColor:"#DDDDDD",
        borderRadius:10,
        paddingVertical:12,
        paddingHorizontal:14,
        fontSize:15,
        backgroundColor:"#FFFFFF",
        color:"#222222",
    },
    button:{
        backgroundColor:"#138a4a",
        borderRadius:10,
        paddingVertical:15,
        alignItems:"center",
        marginTop:12,
        shadowColor:"#138a4a",
        shadowOffset:{ width:0, height:3 },
        shadowOpacity:0.3,
        shadowRadius:5,
        elevation:3,
    },
    buttonText:{
        color:"#FFFFFF",
        fontSize:16,
        fontWeight:"bold",
        letterSpacing:0.5,
    },
    previewBox:{
        marginTop:24,
        padding:18,
        backgroundColor:"#EAF7EF",
        borderRadius:12,
        borderWidth:1,
        borderColor:"#BFE6CE",
    },
    previewTitle:{
        fontSize:16,
        fontWeight:"bold",
        color:"#138a4a",
        marginBottom:12,
    },
    previewRow:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingVertical:8,
        borderBottomWidth:1,
        borderBottomColor:"#D5EDDD",
    },
    previewLabel:{
        fontSize:13,
        color:"#5A5A5A",
        fontWeight:"600",
    },
    previewValue:{
        fontSize:13,
        color:"#222222",
        fontWeight:"500",
        maxWidth:"60%",
        textAlign:"right",
    },
})