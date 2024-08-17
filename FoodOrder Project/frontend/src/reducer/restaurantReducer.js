import {
    ALL_RESTAURANTS_FAIL,
    CLEAR_ERROR,
    ALL_RESTAURANTS_REQUEST,
    ALL_RESTAURANTS_SUCCESS,
    SORT_BY_RATINGS,
    SORT_BY_REVIEWS,
    TOGGLE_VEG_ONLY,
  } from "../constants/restaurantConstant";
  
  // Initial state
  const initialState = {
    restaurants: [],
    loading: false,
    error: null,
    count: 0,
    showVegOnly: false,
    pureVegRestaurantsCount: 0,
  };
  
  // Reducer function
  export const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
      case ALL_RESTAURANTS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
  
      case ALL_RESTAURANTS_SUCCESS:
        const pureVegRestaurantsCount = calculatePureVegCount(action.payload.restaurants, state.showVegOnly);
        return {
          ...state,
          loading: false,
          count: action.payload.count,
          restaurants: action.payload.restaurants,
          pureVegRestaurantsCount,
        };
  
      case ALL_RESTAURANTS_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case SORT_BY_RATINGS:
        return {
          ...state,
          restaurants: [...state.restaurants].sort((a, b) => b.ratings - a.ratings), // Descending order
        };
  
      case SORT_BY_REVIEWS:
        return {
          ...state,
          restaurants: [...state.restaurants].sort((a, b) => b.numOfReviews - a.numOfReviews), // Descending order
        };
  
      case TOGGLE_VEG_ONLY:
        const newShowVegOnly = !state.showVegOnly;
        return {
          ...state,
          showVegOnly: newShowVegOnly,
          pureVegRestaurantsCount: calculatePureVegCount(state.restaurants, newShowVegOnly),
        };
  
      case CLEAR_ERROR:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };
  
  // Calculate pure vegetarian restaurants count
  const calculatePureVegCount = (restaurants, showVegOnly) => {
    if (!showVegOnly) {
      return restaurants.length;
    } else {
      return restaurants.filter((restaurant) => restaurant.isVeg).length;
    }
  };
  