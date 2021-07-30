const initialState = {
    myId: '',
    myUserName: '',
    myWelcomeMessage: '',
    myProfilePhoto: null,
    myPassword: null,
    myPhone: null,
    update: false,
    sockets: [{
        id: 10000,
        socket: new WebSocket('wss://' + window.location.host + '/ws/room/100/')
    }],
    notifications: [],
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_NOTIFICATION": {
            console.log(state.notifications)
            console.log(state.sockets)
            let newCounter;
            let newNotification;
            let newNotifications;
            const index = state.notifications.findIndex((element) => element.id === action.payload.notification);
            if (index === -1) {
                newCounter = 1;
                newNotification = {
                    id: action.payload.notification,
                    counter: newCounter,
                    message: action.payload.message
                }
                newNotifications = [
                    ...state.notifications,
                    newNotification
                ]
            }
            else {
                const foundCounter = state.notifications.find((element) => element.id === action.payload.notification);
                newCounter = foundCounter.counter + 1;
                newNotification = {
                    id: action.payload.notification,
                    counter: newCounter,
                    message: action.payload.message
                }
                newNotifications = [
                    ...state.notifications.slice(0, index),
                    newNotification,
                    ...state.notifications.slice(index + 1)
                ]
            }
            return {
                ...state,
                notifications: newNotifications
            }
        }
        case "READ_NOTIFICATION": {
            const index = state.notifications.findIndex((element) => element.id === action.payload);
            const newNotification = {
                id: action.payload,
                counter: 0,
                message: null
            }
            const newNotifications = [
                ...state.notifications.slice(0, index),
                newNotification,
                ...state.notifications.slice(index + 1)
            ]
            return {
                ...state,
                notifications: newNotifications
            }
        }
        case "ADD_SOCKET": {
            let newSockets = [
                ...state.sockets,
                action.payload
            ]
            return {
                ...state,
                sockets: newSockets
            }
        }
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
                update: action.payload
            }
        }

        default:
            return state;
    }
}

export default reducer;