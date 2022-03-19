import React from "react";
import { Input, Button } from "react-native-elements";
import _default from "react-native-elements/dist/image/Image";
import Spacer from './Spacer'

const TrackForm = () => {
    return <>
         <Input placeholder="Enter name"/>
        <Spacer>
            <Button title="Start Recording"/>
        </Spacer>
    </> 
}

export default TrackForm