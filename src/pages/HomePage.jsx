import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink, useParams } from 'react-router-dom';
import { fetchRegions, regionsFilter } from '../redux';
import Menucomponent from '../components/MenuComponent';
import Loadingcomponent from '../components/LoadingComponent';
import './pageStyle.css';

const HomePage = ({
  fetchRegions,
  countryData,
  statusData,
  regionFilteredData,
  regionsFilter,
}) => {
  const { countryId } = useParams();

  useEffect(() => {
    fetchRegions(countryId);
    regionsFilter('');
  }, []);

  if (statusData.loading) {
    return <div><Loadingcomponent /></div>;
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
      <Menucomponent title={countryData.name} />
      <div className="d-flex flex-row">
        <h1 className="col-6 text-light text-center align-self-center">{countryData.name}</h1>
        <div className="col-6 text-light">
          <p>
            Today confirmed:
            {countryData.today_confirmed}
          </p>
          <p>
            Source:
            {countryData.source}
          </p>
        </div>
      </div>
      <hr />
      <input className="form-control" placeholder="Search by Region..." type="text" onChange={(e) => regionsFilter(e.target.value)} />
      <br />
      <h5 className="bg-pink-complement p-1">
        <span className="ms-1">City/Town Breakdown</span>
      </h5>
      <table className="col-12">
        {
          regionFilteredData.map((region) => (
            <tr className="d-flex flex-row justify-content-between p-3" key={region.id}>
              <span>{region.name}</span>
              today confirmed:
              {region.today_confirmed}
              <NavLink to={(`/region/${region.id}`)}>
                <i className="bi bi-arrow-right-circle text-light" />
              </NavLink>
            </tr>
          ))
        }
      </table>
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
  fetchRegions: (country) => dispatch(fetchRegions(country)),
  regionsFilter: (filter) => dispatch(regionsFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
