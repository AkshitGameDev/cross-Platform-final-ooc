import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_AUTH } from "./FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignInScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); // Changed to boolean for clarity
    const auth = FIREBASE_AUTH;
    const navigation = useNavigation();
        
    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            navigation.navigate('home');
            console.log(response);
        } catch (error: any) {
            console.log(error);
            alert('Registration failed: ' + error.message); // Improved error message
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('./assets/LOGO.png')} />
            <Text style={styles.heading}>Welcome,</Text>
    
            <TextInput
                style={styles.textField}
                value={email}
                placeholder="EMAIL"
                autoCapitalize="none"
                onChangeText={text => setEmail(text)}
            />
    
            <TextInput
                style={styles.textField}
                value={password}
                placeholder="PASSWORD"
                secureTextEntry // Added to hide password input
                autoCapitalize="none"
                onChangeText={text => setPassword(text)}
            />
    
            <TouchableOpacity style={styles.button} onPress={signUp} disabled={loading}>
                <Text style={styles.buttonText}>{loading ? 'LOADING...' : 'SIGN UP'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.infoText}>Already have an account?</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f2f2f2'
    },
    logo: {
        width: 75, 
        height: 75, 
        marginBottom: 25, 
        alignSelf: 'center',
    },
    heading: {
        fontSize: 40,
        marginLeft: 25,
        marginBottom: 10
    },
    button: {
        backgroundColor: '#fd2401',
        padding: 10,
        borderRadius: 20,
        marginTop: 10,
        width: '80%',
        alignItems: 'center',
        alignSelf: 'center',
    },
    textField: {
        width: '80%',
        height: 50,
        alignSelf: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 25,
        borderRadius: 20,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 24,
        textAlign: 'center',
    },
    infoText: {
        marginTop: 10,
        color: '#a6a5a8',
        fontSize: 13,
        textAlign: 'center',
    }
});

export default SignInScreen;
