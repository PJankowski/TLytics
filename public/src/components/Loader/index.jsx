import React from 'react';

import './Loader.css';

function Loader() {
  return (
    <div className="Loader">
      <div className="Loader__indicator Loader__indicator--first">&nbsp;</div>
      <div className="Loader__indicator Loader__indicator--second">&nbsp;</div>
      <div className="Loader__indicator Loader__indicator--third">&nbsp;</div>
      <div className="Loader__indicator Loader__indicator--fourth">&nbsp;</div>
      <div className="Loader__indicator Loader__indicator--fifth">&nbsp;</div>
    </div>
  );
}

export default Loader;
