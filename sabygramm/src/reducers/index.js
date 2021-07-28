const initialState = {
    myId: '',
    myUserName: '',
    myWelcomeMessage: '',
    myProfilePhoto: null,
    myPassword: null,
    myPhone: null,
    shouldUpdate: false,
    // sockets: []

}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        // case "ADD_NEW_SOCKET": {
        //     const {socket, socketId} = action.payload;
        //     const newSockets = state.sockets.push({socketId, socket});
        //     return {
        //         ...state,
        //         sockets: newSockets
        //     }
        // }
        case "SET_MY_ID": {
            return {
                ...state,
                myId: action.payload
            }
        }
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
        case "CLEAR_STATE": {
            return initialState;
        }
        case "SHOULD_UPDATE": {
            return {
                ...state,
                shouldUpdate: action.payload
            }
        }

        default:
            return state;
    }
}

export default reducer;