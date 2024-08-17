import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurants } from '../../actions/restaurantAction';

export default function CountRestaurant() {
    const dispatch = useDispatch();
    const { loading, error, count, showVegOnly, pureVegRestaurantsCount } = useSelector((state) => state.restaurants);

    useEffect(() => {
        dispatch(getRestaurants());
    }, [dispatch]);

    const restaurantCount = showVegOnly ? pureVegRestaurantsCount : count;
    const restaurantText = restaurantCount === 1 ? 'Restaurant' : 'Restaurants';

    return (
        <div>
            {loading ? (
                <p>Loading restaurant count...</p>
            ) : error ? (
                <p>Error loading restaurant count: {error}</p>
            ) : (
                <p className="NumOfRestro">
                    {restaurantCount} <span className="Restro">{restaurantText}</span>
                </p>
            )}
            <hr />
        </div>
    );
}
