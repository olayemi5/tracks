import React, { useContext } from 'react'
import { NavigationEvents } from 'react-navigation' 
import { StyleSheet, SafeAreaView} from 'react-native'
import { Context as AuthContext} from '../context/AuthContext'
import AuthForm from '../component/AuthForm'
import NavLink from '../component/NavLink'

const SigninScreen = () => {

    const {state, signin, clearErrorMsg} = useContext(AuthContext)
   

    return <SafeAreaView  style={styles.container} >
        <NavigationEvents onWillBlur={clearErrorMsg}/>
            <AuthForm 
                headerText="Sign into your account"
                errorMessage={state.errorMessage}
                submitButtonText="Sign in"
                onSubmit={signin}
            />
            <NavLink 
                text="Dont have an account? Sign up."
                routeName="Signup"
            />
            
    </SafeAreaView>
}

SigninScreen.navigationOptions = {
    headerShown: false
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 90
    }
})

export default SigninScreen