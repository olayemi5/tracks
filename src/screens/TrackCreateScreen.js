import '../_markupLocations'
import React, { useContext } from 'react'
import { StyleSheet, StatusBar} from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import Map from '../component/Map'
import { Context } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'
import TrackForm from '../component/TrackForm'

const TrackCreateScreen = ({ isFocused }) => {
   
    const { addLocation } = useContext(Context);
    const [err] = useLocation(isFocused, addLocation)

    return (
        <SafeAreaView style={styles.container} forceInset={{ top: 'always'}}>
            <Text h2>Create a Track</Text>
            <Map />
            { err ? <Text>Please enable location services</Text> : null }
            <TrackForm />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:StatusBar.currentHeight
    }
})

export default withNavigationFocus(TrackCreateScreen)