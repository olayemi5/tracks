import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "./Spacer";

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return <View>
                <Spacer>
                <Text h3>{headerText}</Text>
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
               { errorMessage ? <Text style={styles.errorMsg}> {errorMessage}  </Text> : null }
                <Spacer>
                    <Button onPress={() => onSubmit({ email, password })} title={submitButtonText}/>
                </Spacer>
                <Spacer />
    </View>
}

const styles = StyleSheet.create({
     errorMsg: {
        fontSize: 16,
        color: 'red',
        textAlign: 'center'
    }
})

export default AuthForm