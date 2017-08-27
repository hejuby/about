import React from 'react';

import DashboardItem from './DashboardItem';

const $ = require('jquery');

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: null,
    };
  }

  componentWillMount() {
    const context = this;
    const userURL = 'https://api.github.com/users/' + context.props.userName + '/events';
    $.get(userURL, (data) => {
      const myArray = [];
      for (const value of data) {
        myArray.push({
          type: value.type,
          repoName: value.repo.name,
          repoUrl: 'https://github.com/' + value.repo.name,
          payload: value.payload,
          date: new Date(value.created_at).valueOf(),
        });
        // else if (value.type === 'IssueCommentEvent') {
        //   if (value.payload.action === 'created') {
        //     myArray.push({
        //       type: 'Created an comment to the issue',
        //       date: new Date(value.created_at).valueOf(),
        //     });
        //   } else if (value.payload.action === 'edited') {
        //     myArray.push({
        //       type: 'Edited an comment to the issue',
        //       date: new Date(value.created_at).valueOf(),
        //     });
        //   } else if (value.payload.action === 'deleted') {
        //     myArray.push({
        //       type: 'Deleted an comment to the issue',
        //       date: new Date(value.created_at).valueOf(),
        //     });
        //   }
        // } else if (value.type === 'IssuesEvent') {
        // }
      }
      context.setState({
        array: myArray.slice(0, 15),
      });
    });
  }

  render() {
    if (this.state.array !== null) {
      return (
        <div className="forms-dashboard">
          {this.state.array.map(object => (<DashboardItem
            key={object.id}
            itemObject={object}
          />))}
        </div>
      );
    }
    return (
      <div className="forms-dashboard">
        Loading...
      </div>
    );
  }
}

export default Dashboard;
