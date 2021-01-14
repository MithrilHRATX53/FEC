import React from 'react';

export const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand">
          <img src="./logo.png" alt="logo" style={{ height: '40px' }} />
        </a>
        <div className="d-flex">
          <button className="btn btn-outline-light" type="submit">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};
