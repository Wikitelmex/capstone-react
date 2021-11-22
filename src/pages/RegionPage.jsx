import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

const Regionpage = () => {
  const title = 'Region Page';
  const { regionId } = useParams();
  return (
    <div>
      <h1>{title}</h1>
      <p>
        you are in region:
        {regionId}
      </p>
      <NavLink to="/">back to Home</NavLink>
    </div>
  );
};

export default Regionpage;
