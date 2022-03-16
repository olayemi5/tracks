import React, { useState } from 'react'
import { View, StyleSheet, SafeAreaView} from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../component/Spacer'

const SignupScreen = ({ navigation }) => {

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
                <Spacer>
                    <Button title="Sign Up"/>
                </Spacer>
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
    }
})

export default SignupScreen