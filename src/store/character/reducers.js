import { GET_DATA, GET_ERROR, GET_PENDING, GET_DETAIL } from './actionTypes'

const initialState = {
    data: [],
    loading: false,
    error: {
        status: false,
        msg: ''
    }
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                data: action.payload,
                loading: false,
            }
        case GET_DETAIL:
            return {
                ...state,
                data: action.payload,
                loading: false,
            }
        case GET_PENDING:
            return {
                ...state,
                loading: true
            }
        case GET_ERROR:
            let errorObj = {
                status: true,
                msg: 'something is not right...'
            }
            return {
                ...state,
                error: {
                    ...errorObj
                },
                loading: false,
            }
        default:
            return state;
    }
}

export default reducers;