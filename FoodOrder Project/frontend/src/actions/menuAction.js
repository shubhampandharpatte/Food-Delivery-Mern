import { ALL_MENUS_REQUEST, ALL_MENUS_SUCCESS, ALL_MENUS_FAIL } from "../constants/menuConstant";
import axios from 'axios';

export const getMenus = (id) => async (dispatch) =>  {
  
        try {
            // Dispatch request action to indicate the start of API call
            dispatch({ type: ALL_MENUS_REQUEST });

            // Construct the API endpoint URL
            const response = await axios.get(`/api/v1/eats/stores/${id}/menus`);
            // console.log(response);

            // Dispatch success action with the retrieved menu data
            dispatch({
                type: ALL_MENUS_SUCCESS,
                payload: response.data.data[0].menu, // Adjust according to actual API response
            });
        } catch (err) {
            // Dispatch failure action with error message
            dispatch({
                type: ALL_MENUS_FAIL,
                payload: err.message,
            });
        }
    
};

// export default getMenu;
