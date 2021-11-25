import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { fetchRegions, regionsFilter } from '../redux';

const HomePage = ({
  fetchRegions,
  regionData,
  countryData,
  statusData,
  regionFilteredData,
  regionsFilter,
}) => {
  useEffect(() => {
    if (regionData.length === 0) {
      fetchRegions();
    }
  }, []);

  if (statusData.loading) {
    return <h1>Loading...</h1>;
  }

  if (statusData.error) {
    return (
      <div>
        Error!
        {statusData.error}
      </div>
    );
  }

  return (
    <div>

      <h1>Home Page</h1>
      <p>
        Country:
        {countryData.name}
      </p>
      <p>
        Today confirmed:
        {countryData.today_confirmed}
      </p>
      <p>
        Source:
        {countryData.source}
      </p>
      <hr />
      <span>Filter</span>
      <h2>Regions</h2>
      <input type="text" onChange={(e) => regionsFilter(e.target.value)} />
      {
        regionFilteredData.map((region) => (
          <p key={region.id}>
            <NavLink to={(`/region/${region.id}`)}>
              {region.name}
            </NavLink>
            today confirmed:
            {region.today_confirmed}
          </p>
        ))
      }
    </div>
  );
};

HomePage.propTypes = {
  statusData: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
  fetchRegions: PropTypes.func.isRequired,
  countryData: PropTypes.shape({
    name: PropTypes.string,
    source: PropTypes.string,
    today_confirmed: PropTypes.number,
  }).isRequired,
  regionData: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })).isRequired,
  regionFilteredData: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    today_confirmed: PropTypes.number,
  })).isRequired,
  regionsFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  regionData: state.regions.regions,
  regionFilteredData: state.regions.regionsFiltered,
  countryData: state.regions.country,
  statusData: state.regions,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRegions: () => dispatch(fetchRegions()),
  regionsFilter: (filter) => dispatch(regionsFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
