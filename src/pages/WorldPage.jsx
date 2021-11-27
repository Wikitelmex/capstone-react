import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { fetchCountries, countriesFilter } from '../redux';
import Menucomponent from '../components/MenuComponent';
import './pageStyle.css';
import Loadingcomponent from '../components/LoadingComponent';

const Worldpage = ({
  fetchCountries,
  countryData,
  statusData,
  countryFilteredData,
  countriesFilter,
}) => {
  useEffect(() => {
    if (countryData.length === 0) {
      fetchCountries();
    }
    countriesFilter('');
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

  let aux = 1;
  const cardC1 = 'card bg-pink col-5 mb-1';
  const cardC2 = 'card bg-pink-complement col-5 mb-1';
  return (
    <div>
      <Menucomponent title="Home" />
      <div className="d-flex flex-row">
        <p className="world-card col-6" />
        <h1 className="col-6 text-center align-self-center">World Covid Data</h1>
      </div>
      <div className="bg-pink-complement">
        <h4 className="p-1">Stats by country</h4>
        <input className="form-control" type="text" placeholder="Search by Country..." name="filterTextBox" id="filterTextBox" onChange={(e) => countriesFilter(e.target.value)} />
        <br />
        <div className="d-flex flex-wrap justify-content-evenly">
          {
            countryFilteredData.map((country) => (
              <div className={(aux < 2 ? cardC1 : cardC2)} key={country.id}>
                <p className="d-none">
                  {aux < 3 ? aux += 1 : aux = 0}
                </p>
                <div className="card-header d-flex flex-row justify-content-between">
                  <span>
                    {country.name}
                  </span>
                  <NavLink className="text-light" to={(`/country/${country.id}`)}>
                    <i className="bi bi-arrow-right-circle" />
                  </NavLink>
                </div>
                <div className="card-body">
                  <p>Total Confirmed</p>
                  <p>{country.today_confirmed}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

Worldpage.propTypes = {
  fetchCountries: PropTypes.func.isRequired,
  countryData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    today_confirmed: PropTypes.number.isRequired,
    source: PropTypes.string.isRequired,
  })).isRequired,
  statusData: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
  countryFilteredData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    today_confirmed: PropTypes.number.isRequired,
    source: PropTypes.string.isRequired,
  })).isRequired,
  countriesFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  countryData: state.countries.countries,
  countryFilteredData: state.countries.countriesFiltered,
  statusData: state.countries,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCountries: () => dispatch(fetchCountries()),
  countriesFilter: (filter) => dispatch(countriesFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Worldpage);
