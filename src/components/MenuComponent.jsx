import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Menucomponent = (props) => {
  const { title } = props;
  const today = new Date();
  const year = `${today.getFullYear()}`;
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-pink-navbar text-light fixed-top shadow">
        <div className="container-fluid ms-0">
          <NavLink className="navbar-brand ms-0 me-auto" to="/">
            <h3 className="fw-bold text-light mt-1">
              &#10094;
              &#160;
              {year}
            </h3>
          </NavLink>
          <h5>{title}</h5>
          <div className="navbar-nav d-flex flex-row ms-auto text-light me-3">
            <NavLink to="/" className="active-link me-3">
              <i className="bi bi-mic-fill text-white" />
            </NavLink>
            <NavLink to="/" className="active-link">
              <i className="bi bi-gear-fill text-light" />
            </NavLink>
          </div>
        </div>

      </nav>
      <br />
      <br />
      <br />
    </div>
  );
};

Menucomponent.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Menucomponent;
