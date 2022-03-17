import React from 'react'
import { StyleSheet, StatusBar} from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import Map from '../component/Map'

const TrackCreateScreen = () => {
    return (
        <SafeAreaView style={styles.container} forceInset={{ top: 'always'}}>
            <Text h2>Create a Track</Text>
            <Map />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:StatusBar.currentHeight
    }
})

export default TrackCreateScreen