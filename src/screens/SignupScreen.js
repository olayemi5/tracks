import React, { useState, useContext } from 'react'
import { View, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../component/Spacer'
import { Context as AuthContext} from '../context/AuthContext'

const SignupScreen = ({ navigation }) => {

    const {state, signup} = useContext(AuthContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return <SafeAreaView 
                style={styles.container}
            >
                <Spacer>
                    <Text h3>Sign Up for Tracker</Text>
                </Spacer>
                <Spacer />
                <Input 
                    autoComplete={false}
                    autoCapitalize='none'
                    label="Email" 
                    value={email} 
                    onChangeText={setEmail}
                />
                <Spacer />
                <Input 
                    secureTextEntry
                    autoComplete={false}
                    autoCapitalize='none'
                    label="Password" 
                    value={password} 
                    onChangeText={setPassword}
                />
               { state.errorMessage ? <Text style={styles.errorMsg}> {state.errorMessage} </Text> : null }
                <Spacer>
                    <Button onPress={() => signup({ email, password })} title="Sign Up"/>
                </Spacer>
                <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                    <Text style={styles.link}>Already have an account? Sign in.</Text>
                </TouchableOpacity>
    </SafeAreaView>
}

SignupScreen.navigationOptions = {
    headerShown: false
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 90
    },
    errorMsg: {
        fontSize: 16,
        color: 'red',
        textAlign: 'center'
    },
    link: {
        color: 'blue',
        textAlign: 'center'
    }
})

export default SignupScreen