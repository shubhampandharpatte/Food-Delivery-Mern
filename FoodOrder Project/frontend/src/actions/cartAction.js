import axios from "axios";
import {
  FETCH_CART,
  ADD_TO_CART,
  UPDATE_CART_ITEM,
  REMOVE_CART_ITEM,
} from "../constants/cartConstant";

// Fetch cart items
export const fetchCartItems = (alert) => async (dispatch) => {
  try {
    const response = await axios.get("/api/v1/eats/cart/get-cart");
    dispatch({
      type: FETCH_CART,
      payload: response.data.data,
    });
  } catch (error) {
    console.error("Fetch cart error:", error);
    if (alert) {
      alert.info("Unable to fetch cart items");
    }
  }
};

// Add item to cart
export const addItemToCart = (foodItemId, restaurant, quantity, alert) => async (dispatch, getState) => {
  try {
    const { user } = getState().auth;
    if (typeof foodItemId === "object") {
      foodItemId = foodItemId._id; // Ensure _id is correct
    }
    const response = await axios.post("/api/v1/eats/cart/add-to-cart", {
      userId: user._id,
      foodItemId,
      restaurantId: restaurant,
      quantity,
    });
    if (alert) {
      alert.success("Items added to cart", response.data.cart);
    }
    dispatch({
      type: ADD_TO_CART,
      payload: response.data.cart,
    });
  } catch (error) {
    console.error("Add to cart error:", error);
    if (alert) {
      alert.error(error.response ? error.response.data.message : error.message);
    }
  }
};

// Update cart quantity
export const updateCartQuantity = (foodItemId, quantity, alert) => async (dispatch, getState) => {
  try {
    const { user } = getState().auth;
    if (typeof foodItemId === "object") {
      foodItemId = foodItemId._id; // Ensure _id is correct
    }
    const response = await axios.post("/api/v1/eats/cart/update-cart-item", {
      userId: user._id,
      foodItemId:foodItemId,
      quantity,
    });
    dispatch({
      type: UPDATE_CART_ITEM,
      payload: response.data.cart,
    });
  } catch (error) {
    console.error("Update cart quantity error:", error);
    if (alert) {
      alert.error(error.response ? error.response.data.message : error.message);
    }
  }
};

// Remove item from cart
export const removeItemFromCart = (foodItemId) => async (dispatch, getState) => {
  try {
    const { user } = getState().auth;
    if (typeof foodItemId === "object") {
      foodItemId = foodItemId._id; // Ensure _id is correct
    }
    const response = await axios.delete("/api/v1/eats/cart/delete-cart-item", {
      data: { userId: user._id, foodItemId }, // Data sent in body of DELETE request
    });
    dispatch({
      type: REMOVE_CART_ITEM,
      payload: response.data,
    });
  } catch (error) {
    console.error("Remove item from cart error:", error);
    if (alert) {
      alert.error(error.response ? error.response.data.message : error.message);
    }
  }
};
