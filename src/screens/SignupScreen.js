import React, { useContext } from 'react'
import { StyleSheet, SafeAreaView} from 'react-native'
import { Context as AuthContext} from '../context/AuthContext'
import AuthForm from '../component/AuthForm'
import NavLink from '../component/NavLink'

const SignupScreen = ({ navigation }) => {

    const {state, signup} = useContext(AuthContext)
   

    return <SafeAreaView  style={styles.container} >
            <AuthForm 
                headerText="Sign up for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign up"
                onSubmit={signup}
            />
            <NavLink 
                text="Already have an account? Sign in."
                routeName="Signin"
            />
            
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