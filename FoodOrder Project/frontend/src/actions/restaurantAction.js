import {
  ALL_RESTAURANTS_REQUEST,
  TOGGLE_VEG_ONLY,
  SORT_BY_RATINGS,
  ALL_RESTAURANTS_FAIL,
  ALL_RESTAURANTS_SUCCESS,
  SORT_BY_REVIEWS,
  CLEAR_ERROR,
} from "../constants/restaurantConstant";
import axios from "axios";

// Action to get all restaurants
export const getRestaurants = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_RESTAURANTS_REQUEST });
    const link = `/api/v1/eats/stores`;
    const { data } = await axios.get(link);
    console.log(data);

    const { restaurants, count } = data;
    dispatch({
      type: ALL_RESTAURANTS_SUCCESS,
      payload: { restaurants, count },
    });
  } catch (err) {
    dispatch({
      type: ALL_RESTAURANTS_FAIL,
      payload: err.response && err.response.data.message
        ? err.response.data.message
        : err.message,
    });
  }
};

// Action to sort restaurants by ratings
export const sortByRatings = () => {
  return {
    type: SORT_BY_RATINGS,
  };
};

// Action to sort restaurants by reviews
export const sortByReviews = () => {
  return {
    type: SORT_BY_REVIEWS,
  };
};

// Action to toggle vegetarian-only filter
export const toggleVegOnly = () => {
  return {
    type: TOGGLE_VEG_ONLY,
  };
};

// Action to clear errors
export const clearError = () => {
  return {
    type: CLEAR_ERROR,
  };
};
