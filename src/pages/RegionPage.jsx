import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Menucomponent from '../components/MenuComponent';
import './pageStyle.css';

const Regionpage = () => {
  const { regionId } = useParams();
  const regionData = useSelector(
    (state) => (
      state.regions.regions.filter((region) => region.id === regionId)[0]
    ),
  );

  return (
    <div className="p-1">
      <Menucomponent title={regionData.name} />
      <div className="card bg-pink">
        <h1 className="card-header">{regionData.name}</h1>
        <div className="card-body">
          <p>
            today confirmed:
            {regionData.today_confirmed}
          </p>
          <p>
            today deaths:
            {regionData.today_deaths}
          </p>
          <p>
            today recovered:
            {regionData.today_recovered}
          </p>
          <p>
            total confirmed:
            {regionData.total_confirmed}
          </p>
          <p>
            total deaths:
            {regionData.total_deaths}
          </p>
          <p>
            total recovered:
            {regionData.total_recovered}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Regionpage;
