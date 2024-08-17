import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { createOrder } from '../../actions/orderAction';

const OrderSuccess = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const session_id = searchParams.get("session_id");
  const dispatch = useDispatch();

  useEffect(() => {
    if (session_id) {
      dispatch(createOrder(session_id)).catch((error) => {
        console.error("Order creation failed:", error);
        // Handle the error, e.g., show an alert or redirect to an error page
      });
    }
  }, [dispatch, session_id]);

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-12 col-md-8 col-lg-6 text-center">
        <svg
          className="checkmark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
          width="100"
          height="100"
          aria-hidden="true"
        >
          <circle
            className="checkmark__circle"
            cx="26"
            cy="26"
            r="25"
            fill="none"
          />
          <path
            className="checkmark__check"
            fill="none"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
          />
        </svg>

        <h2 className="my-4">Your order has been placed successfully.</h2>

        <Link to="/eats/orders/me/myOrders" className="btn btn-primary">
          Go to Orders
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
