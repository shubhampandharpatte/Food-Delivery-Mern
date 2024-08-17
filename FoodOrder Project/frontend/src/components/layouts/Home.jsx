import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CountRestaurant from './CountRestaurant';
import Restaurant from './Restaurant';
import Loader from './Loader';
import Message from './Message';
import { getRestaurants, sortByRatings, sortByReviews, toggleVegOnly } from '../../actions/restaurantAction';

export default function Home() {
  const dispatch = useDispatch();
  const { loading: restaurantLoading, error: restaurantError, restaurants, showVegOnly } = useSelector((state) => state.restaurants);

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  const handleSortByReviews = () => {
    dispatch(sortByReviews());
  };

  const handleSortByRatings = () => {
    dispatch(sortByRatings());
  };

  const handleToggleVeg = () => {
    dispatch(toggleVegOnly());
  };

  return (
    <div>
      <CountRestaurant />
      {restaurantLoading ? (
        <Loader />
      ) : restaurantError ? (
        <Message variant="danger">{restaurantError}</Message>
      ) : (
        <section>
          <div className="sort">
            <button 
              className={`sort_veg p-3 ${showVegOnly ? 'active' : ''}`} 
              onClick={handleToggleVeg}
            >
              {showVegOnly ? 'Show All' : 'Pure Veg'}
            </button>
            <button 
              className="sort_rev p-3" 
              onClick={handleSortByReviews}
            >
              Sort by Reviews
            </button>
            <button 
              className="sort_rate p-3" 
              onClick={handleSortByRatings}
            >
              Sort by Ratings
            </button>
          </div>
          <div className="row mt-4">
            {restaurants.length > 0 ? (
              restaurants
                .filter(restaurant => !showVegOnly || restaurant.isVeg)
                .map(restaurant => (
                  <Restaurant key={restaurant._id} restaurant={restaurant} />
                ))
            ) : (
              <Message variant="info">No restaurants found</Message>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
