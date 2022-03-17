import React, { useContext } from 'react'
import { Text, StyleSheet, StatusBar} from 'react-native'
import { Button } from 'react-native-elements'
import Spacer from '../component/Spacer'
import { SafeAreaView } from 'react-navigation'
import { Context as AuthContext } from '../context/AuthContext'

const AccountScreen = () => {
    const { signout } = useContext(AuthContext)

    return (
        <SafeAreaView style={styles.container} forceInset={{ top: 'always'}}>
            <Text style={{ fontSize: 48 }}>Account Screen</Text>
            <Spacer>
                <Button title="Sign out" onPress={signout}/>
            </Spacer>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
     container: {
        flex: 1,
        marginTop:StatusBar.currentHeight
    }
})

export default AccountScreen