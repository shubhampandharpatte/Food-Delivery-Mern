import React, { useEffect } from "react";
import Loader from "../layouts/Loader";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const { user, loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch user data if needed
    // dispatch(fetchUserData()); // Uncomment if there's an action to fetch user data
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p className="text-danger">Error fetching user data</p>;
  }

  return (
    <div className="row justify-content-around mt-5 user-info">
      <div className="col-12 col-md-5 profile">
        <div className="d-flex align-items-center mb-4">
          <figure className="avatar avatar-profile text-center mr-3">
            <img
              className="rounded-circle figure-img img-fluid"
              src={user?.avatar?.url || "/default-avatar.png"}
              alt={user?.name || "User Avatar"}
            />
          </figure>
          <span className="h3">{user?.name || "User Name"}</span>
        </div>
        <Link
          to="/users/me/update"
          id="edit_profile"
          className="btn btn-primary btn-block my-5"
        >
          Edit Profile
        </Link>
        <div className="profile-info">
          <h4>Full Name:</h4>
          <p>{user?.name || "N/A"}</p>

          <h4>Email Address:</h4>
          <p>{user?.email || "N/A"}</p>

          <h4>Joined On:</h4>
          <p>{user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
