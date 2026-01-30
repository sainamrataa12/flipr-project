import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', background: '#0077cc', color: 'white' }}>
      <Link to="/" style={{ marginRight: '1rem', color: 'white', textDecoration: 'none' }}>Home</Link>
      <Link to="/admin" style={{ color: 'white', textDecoration: 'none' }}>Admin</Link>
    </nav>
  );
};

export default Navbar;
