import { actionTypes } from "./actionTypes";

export const initialState = {
    loading: false,
    product: [],
    error: false
};

export const productReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.FETCHING_START:
            return {
                ...state,
                loading: true,
                error: false
            }
        case actionTypes.FETCHING_SUCCESS: 
        return {
            ...state,
            loading: false,
            product: action.payload,
            error: false
        }
        case actionTypes.FETCHING_ERROR: 
        return {
            ...state,
            loading: false,
            error: true
        }
        default:
            return state;
    }
}