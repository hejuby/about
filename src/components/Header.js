import React from 'react';

import './Header.css';

class Header extends React.Component {
  render() {return (
      <div className="app-header">
        <div className="app-header-vertical">
          <span className="app-header-logo">
            Heejun Byeon
          </span>
        </div>
      </div>
    );
  }
}


export default Header;
