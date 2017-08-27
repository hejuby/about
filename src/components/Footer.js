import React from 'react';

import Dashboard from './forms/feed/Dashboard';
// import Mail from 'react-icons/lib/ti/mail';
// import SocialGithub from 'react-icons/lib/ti/social-github';
// import SocialFacebook from 'react-icons/lib/ti/social-facebook';
// import SocialTwitter from 'react-icons/lib/ti/social-twitter';
import Envelope from 'react-icons/lib/fa/envelope';
import Github from 'react-icons/lib/fa/github';
import Facebook from 'react-icons/lib/fa/facebook';
import Twitter from 'react-icons/lib/fa/twitter';
import './Footer.css';

/* class Footer extends React.Component {
  render() {
    return (
      <div className="app-footer">
        <ul>
          <li><a href="mailto:slkjse9@gmail.com">Mail</a></li>
          <li><a href="https://github.com/slkjse9">Github</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
        </ul>
      </div>
    );
  }
}*/

class Footer extends React.Component {
  render() {
    return (
      <div className="app-footer">
        <div className="footer-contact">
          <nav>
            <a target="_blank" href="mailto:hejuby@gmail.com"><h2><Envelope /></h2></a>&nbsp;&nbsp;
            <a target="_blank" href="https://github.com/hejuby"><h2><Github /></h2></a>&nbsp;&nbsp;
            <a href="#"><h2><Facebook /></h2></a>&nbsp;&nbsp;
            <a href="#"><h2><Twitter /></h2></a>
          </nav>
        </div>
        <hr />
        <div className="footer-feed">
          {/* <h3>Github Feed</h3> */}
          <Dashboard userName="hejuby" />
        </div>
      </div>
    );
  }
}

export default Footer;
