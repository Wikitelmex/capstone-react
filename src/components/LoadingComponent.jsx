import React from 'react';

const Loadingcomponent = () => (
  <div className="d-flex flex-column w-100 h-100 text-center align-items-center justify-content-center">
    <br />
    <br />
    <h1>Loading...</h1>
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

export default Loadingcomponent;
