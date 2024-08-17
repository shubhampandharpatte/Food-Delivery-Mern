import { ALL_MENUS_REQUEST, ALL_MENUS_SUCCESS, ALL_MENUS_FAIL } from '../constants/menuConstant';

const initialState = {
    menus: [],
    loading: false,
    error: null,
};


export const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_MENUS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case ALL_MENUS_SUCCESS:
            return {
                ...state,
                loading: false,
                menus: action.payload , // Ensure menus are correctly populated
            };
        case ALL_MENUS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload || 'Failed to fetch menus',  // Provide a default error message if payload is undefined
            };
        default:
            return state;
    }
};
