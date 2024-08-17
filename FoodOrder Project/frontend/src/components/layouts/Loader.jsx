// import React from "react";

// const Loader = () => {
//   return <div className="loader"></div>;
// };

// export default Loader;
import React from "react";

const Loader = () => {
  const loaderStyle = {
    border: '8px solid #f3f3f3', /* Light grey background */
    borderTop: '8px solid #3498db', /* Blue spinner */
    borderRadius: '50%',
    width: '80px',
    height: '80px',
    animation: 'spin 1.5s linear infinite',
  };

  const wrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', /* Adjust based on your layout needs */
    backgroundColor: 'rgba(255, 255, 255, 0.8)', /* Optional: adds a background overlay */
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    zIndex: '9999', /* Ensure it appears on top */
  };

  return (
    <div style={wrapperStyle}>
      <div style={loaderStyle}></div>
    </div>
  );
};

export default Loader;
