import React from 'react';
import './NavBar.scss';

function NavBar({ leftChildren, rightChildren }) {
  return (
    <div className="nav_container">
      <div className="logos_pro">
        {leftChildren}
      </div>
      <div className="title_nav">
        <h1 className="titles">My GRApp</h1>
      </div>
      <div className="logos_pro">
        {rightChildren}
      </div>
    </div>
  );
}

export default NavBar;
