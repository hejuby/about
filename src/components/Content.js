import React from 'react';

// import GithubForm from './forms/github/GithubForm';
import GithubRecent from './forms/github/RecentList';

import './Content.css';

class Content extends React.Component {
  render() {
    return (
      <div className="app-content">
        <div className="content-description">
          <br />College Student. Love Coding. Interested in Web and Machine Learning.
        </div>
        <hr />
        <div className="content-list">
          <div className="list-projects">
            <h3>Recent Projects</h3>
            {/* <GithubRecent userName="slkjse9" standardDate={5259492000} /> */}
            <GithubRecent userName="hejuby" standardDate={3.154e+10} />
            {/* <h2>Activity</h2> */}
            <h3>Experience</h3>
            <h3>Education</h3>
            <ul>
              <li><h4>Computer Science</h4>Colorado State University, Fort Collins (2017 -)</li>
            </ul>
            <br />
          </div>
        </div>
        {/* <div className="content-home-github-recent-title">
          <h2>Recent Works</h2>
          <h3>updated in 2 months</h3>
        </div> */}
        {/* <h3>Recent</h3>
        <GithubForm contentType="recent"/> */}
        {/* <h3>Lifetime</h3>
        {/* <GithubForm contentType="life"/> */}
        {/* <div className="content-home-blog-recent-title">
          <h2>Recent Posts</h2>
          <h3>written in 2 months</h3>
        </div>
        <BlogRecent /> */}
      </div>
    );
  }
}

export default Content;
