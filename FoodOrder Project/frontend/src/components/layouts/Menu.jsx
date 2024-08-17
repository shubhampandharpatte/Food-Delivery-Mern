import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import FoodItem from './FoodItem';
import Loader from './Loader';
import Message from './Message';
import {getMenus}  from '../../actions/menuAction';

export default function Menu() {
  const dispatch = useDispatch();
  const { id } = useParams(); // Get the restaurant ID from URL params
  // const { loading: menuLoading, error: menuError, menus } = useSelector((state) => state.menus);
  const {menus, loading, error} = useSelector((state) => state.menus);

  useEffect(() => {
    dispatch(getMenus(id)); // Fetch menu data based on restaurant ID
  }, [dispatch, id]);

  

  return (
    <div>
      {loading ? (
        <Loader/> 
      ) : error ? (
      <Message variant="danger">{error}</Message>
    ) : menus && menus.length > 0 ? (
      menus.map((menu) => (
        <div key={menu._id}>
          <h2>{menu.category}</h2>
         <hr />
         {menu.items && menu.items.length > 0 ? (
          <div className='row'>
            {menu.items.map((fooditem) => (
              <FoodItem 
              key={fooditem._id}
              fooditem={fooditem}
              restaurant ={id}
            />
            ))}
            </div>
         ) : (
           <Message variant="info">No FoodItem Found</Message>
         )}
        </div>
       ))
      ) : (
        <Message variant="info">No Menus Found</Message>
       )}  
  </div>
  );
}
