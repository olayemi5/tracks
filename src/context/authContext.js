import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from "../navigationRef";



const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload}
        case 'auth':
            return {errorMessage: '', token: action.payload}
        case 'clear_error_message':
            return {...state, errorMessage: ''}
        case 'signout':
            return {token: null, errorMessage: ''}
        default:
            return state; 
    }
}

const clearErrorMsg = dispatch => () => {
    dispatch({ type:'clear_error_message' })
}

const signin = dispatch => async ({email, password}) => {
    try {
        const response = await trackerApi.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({ type: 'auth', payload: response.data.token})
        navigate('TrackList')
    } catch (error) {
        dispatch({ type: 'add_error', payload: 'Something went wrong while sigining in' })
    }
};

const signout = dispatch => async ({email, password}) => {
    //somehow signout
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout'});
    navigate('loginFlow');
};

const signup = dispatch => async ({email, password}) => {
    try {
        const response = await trackerApi.post('/signup', { email, password });
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({ type: 'auth', payload: response.data.token})
        navigate('TrackList')
    } catch (error) {
        dispatch({ type: 'add_error', payload: 'Something went wrong while sigining up' })
    }
}

const tryLocalSignIn = dispatch => async ()=> {
    const token = await AsyncStorage.getItem('token');
    if(token){
         dispatch({ type: 'auth', payload: token})
         navigate('TrackList')
    }
    else{
        navigate('Signup')
    }
}


export const { Provider, Context } = createDataContext(
    authReducer,
    {signin, signout, signup, clearErrorMsg, tryLocalSignIn},
    {isSignedIn : false, errorMessage : ''}
)