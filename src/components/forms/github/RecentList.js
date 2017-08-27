import React from 'react';
import PropTypes from 'prop-types';

import RecentItem from './RecentItem';
import RecentSort from './RecentSort';

const $ = require('jquery');

class RecentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: null,
    };
    this.updateList = this.updateList.bind(this);
  }

  componentWillMount() {
    const context = this;
    const userURL = 'https://api.github.com/users/' + context.props.userName + '/repos';
    $.get(userURL, (data) => {
      const myArray = [];
      for (const value of data) {
        if ((Date.now() - context.props.standardDate) <= new Date(value.updated_at)) {
          myArray.push({
            name: value.name,
            language: value.language,
            description: value.description,
            size: value.size,
            stars: value.stargazers_count,
            updateDate: new Date(value.updated_at).valueOf(),
            url: value.html_url,
          });
        }
      }
      context.setState({
        array: myArray,
      });
    });
  }

  updateList(newArray) {
    this.setState({
      array: newArray,
    });
  }

  render() {
    if (this.state.array !== null) {
      return (
        <div className="forms-github-recent-list">
          <RecentSort
            itemArray={this.state.array}
            onUpdate={this.updateList}
          /><br />
          {this.state.array.map(object => (<RecentItem
            key={object.id}
            itemObject={object}
          />))}
        </div>
      );
    }
    return (
      <div className="forms-github-recent-list">
        Loading...
      </div>
    );
  }

  /* render() {
    return (
      <div className="forms-github-recent-list">
        {(this.state.array !== null) &&
          <div>
            <RecentSort
              itemArray={this.state.array}
              onUpdate={this.updateList}
            /><br />
            {this.state.array.map((object, index) => (<RecentItem
              key={index}
              itemObject={object}
            />))}
          </div>
        }
      </div>
    );
  } */
}

RecentList.propTypes = {
  userName: PropTypes.string,
};

RecentList.defaultProps = {
  userName: 'slkjse9',
};

export default RecentList;
