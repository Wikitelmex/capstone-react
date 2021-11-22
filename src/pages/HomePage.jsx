import React from 'react';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  const title = 'Home Page';
  const reg1 = 'chihuahua';
  const myRoute = `/region/${reg1}`;
  return (
    <div>
      <h1>{title}</h1>
      <p>
        <NavLink to="/Region">Region</NavLink>
      </p>
      <p>
        <NavLink to={myRoute}>
          Region
          {reg1}
        </NavLink>
      </p>
    </div>
  );
};

export default HomePage;
