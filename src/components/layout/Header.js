import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-collapsible navbar-dark bg-primary mb-3 py-1">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <i className="fas fa-address-book" /> {branding}
        </Link>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                <i className="fas fa-home" />
                &nbsp; Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link active">
                <i className="fas fa-plus-circle" />
                &nbsp; Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link active">
                <i className="fas fa-users" />
                &nbsp; About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};
export default Header;
