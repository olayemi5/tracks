import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload}
        case 'signup':
            return {errorMessage: '', token: action.payload}
        default:
            return state; 
    }
}

const signin = dispatch => {
    return ({email, password}) => {
        //make api request with email and password

        //modify state and say we are authenticated

        //if signin falied reflect error message
    }
}

const signout = dispatch => {
    return ({email, password}) => {
        //somehow signout
    }
}

const signup = dispatch => async ({email, password}) => {
    try {
        const response = await trackerApi.post('/signup', { email, password });
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({ type: 'signup', payload: response.data.token})

        navigate('TrackList')
    } catch (error) {
        dispatch({ type: 'add_error', payload: 'Something went wrong while sigining up' })
    }
}


export const { Provider, Context } = createDataContext(
    authReducer,
    {signin, signout, signup},
    {isSignedIn : false, errorMessage : ''}
)