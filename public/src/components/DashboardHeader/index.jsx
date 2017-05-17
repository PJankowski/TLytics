import React from 'react';

import './DashboardHeader.css';

function DashboardHeader({ user, channel }) {
  const logoSrc = channel.logo || 'https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg';
  return (
    <div className="DashboardHeader">
      <div className="DashboardHeader__image-container" style={{ backgroundImage: channel.profile_banner || 'url(https://unsplash.it/1920/250/?random)' }} />

      <figure className="DashboardHeader__profile-image">
        <img src={logoSrc} />
      </figure>

      <div className="DashboardHeader__information">
        <div className="DashboardHeader__itemset">
          <h3>DWdrmr25</h3>
          <p>{channel.status}</p>
        </div>
        <div className="DashboardHeader__itemset">
          <h3>{channel.views}</h3>
          <p>Total Views</p>
        </div>
        <div className="DashboardHeader__itemset">
          <h3>{channel.followers}</h3>
          <p>Followers</p>
        </div>
        <div className="DashboardHeader__itemset">
          <h3>0</h3>
          <p>Subscribers</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
