import React from 'react'
import { Button, Text, StyleSheet} from 'react-native'

const TrackListScreen = ({ navigation }) => {
    return <>
        <Text style={{ fontSize: 48 }}>Track List Screen</Text>
        <Button title="Go to track detail" onPress={() => navigation.navigate('TrackDetail')}></Button>
    </>
}

const styles = StyleSheet.create({})

export default TrackListScreen