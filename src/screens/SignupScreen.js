import React from 'react'
import { Button, Text, StyleSheet} from 'react-native'

const SignupScreen = ({ navigation }) => {
    return <>
        <Text style={{ fontSize: 48 }}>Signup Screen</Text>
        <Button title="Go to signin" onPress={() => navigation.navigate('Signin')}></Button>
        <Button title="Go to mainflow" onPress={() => navigation.navigate('mainFlow')}></Button>
    </>
}

const styles = StyleSheet.create({})

export default SignupScreen