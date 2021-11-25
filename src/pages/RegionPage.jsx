import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';

const Regionpage = () => {
  const title = 'Region Page';
  const { regionId } = useParams();
  const regionData = useSelector(
    (state) => (
      state.regions.regions.filter((region) => region.id === regionId)[0]
    ),
  );

  return (
    <div>
      <h1>{title}</h1>
      <p>
        you are in region:
        {regionData.name}
      </p>
      <p>
        today confirmed:
        {regionData.today_confirmed}
      </p>
      <NavLink to="/">back to Home</NavLink>
    </div>
  );
};

export default Regionpage;
