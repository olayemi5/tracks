import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state; 
    }
}

const signup = dispatch => {
    return ({email, password}) => {
        //make api request with email and password

        //modify state and say we are authenticated

        //if signup falied reflect error message
    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    {},
    {isSignedIn : false}
)