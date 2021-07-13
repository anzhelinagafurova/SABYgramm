const initialState = {
    isAuthenticated: false, //входил раньше, осталось в кэше браузера
    isRegistrated: false, //регистрировался раньше 
    myUserName: null,
    myWelcomeMessage: null,
    myProfilePhoto: null,
    myPassword: null,
    myPhone: null

}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_MY_PASSWORD": {
            return {
                ...state,
                myPassword: action.payload
            }
        }
        case "SET_MY_PHONE": {
            return {
                ...state,
                myPhone: action.payload
            }
        }
        case "SET_MY_PROFILE_PHOTO": {
            return {
                ...state,
                myProfilePhoto: action.payload
            }
        }
        case "SET_MY_WELCOME_MESSAGE": {
            return {
                ...state,
                myWelcomeMessage: action.payload
            }
        }
        case "SET_MY_USER_NAME": {
            return {
                ...state,
                myUserName: action.payload
            }
        }
        default:
            return state;
    }
}

export default reducer;