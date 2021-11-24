import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchRegions } from '../redux';

const Fetchcomponent = () => {
  const dispatch = useDispatch();
  return (
    <div>
      {dispatch(fetchRegions())}
    </div>
  );
}

export default Fetchcomponent;
