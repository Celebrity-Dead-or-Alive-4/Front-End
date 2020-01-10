import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    ADD_SCORE
} from './actions'

const initialState = {
    loading : false,
    error: '',
    userInfo: {
        username: 'Chris Adams'   
    },
    scores:[]
}

export function reducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_START :
            return {
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS :
            return {
                ...state,
                loading: false,
                userInfo: action.payload
            }
        case LOGIN_FAILURE :
            return {
                ...state,
                error: action.payload
            }
        case REGISTER_START :
            return {
                ...state,
                loading: true
            }
        case REGISTER_SUCCESS :
            return {
                ...state,
                loading: false,
                userInfo: action.payload
            }
        case REGISTER_FAILURE :
            return {
                ...state,
                error: action.payload
            } 
        case ADD_SCORE :
            return {
                ...state,
                scores: [...state.scores, action.payload]
            }
        default:
            return state
    }
}