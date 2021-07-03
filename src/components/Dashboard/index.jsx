import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <nav>
      <Link to={`/${'character'}`}>Characters</Link>
      <Link to={`/${'episode'}`}>Episodes</Link>
      <Link to={`/${'location'}`}>Locations</Link>
    </nav>
  );
}

export default Dashboard;
