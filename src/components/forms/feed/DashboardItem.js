import React from 'react';
import PropTypes from 'prop-types';

import Comment from 'react-icons/lib/go/comment';
import GitBranch from 'react-icons/lib/go/git-branch';
import GitPullRequest from 'react-icons/lib/go/git-pull-request';
import IssueClosed from 'react-icons/lib/go/issue-closed';
import IssueOpened from 'react-icons/lib/go/issue-opened';
import IssueReopened from 'react-icons/lib/go/issue-reopened';
import Repo from 'react-icons/lib/go/repo';
import RepoForked from 'react-icons/lib/go/repo-forked';
import RepoPush from 'react-icons/lib/go/repo-push';
import Star from 'react-icons/lib/go/star';
import Tag from 'react-icons/lib/go/tag';

class DashboardItem extends React.Component {
  render() {
    const item = this.props.itemObject;
    let itemMessage = null;
    if (item.type === 'CommitCommentEvent') {
      itemMessage = (
        <div className="forms-dashboard-item-message">
          <Comment />
          &nbsp;Created <a target="_blank" href={item.payload.comment.html_url}>a comment</a>
          &nbsp;to a commit
        </div>);
    } else if (item.type === 'CreateEvent') {
      const refUrl = 'https://github.com/' + item.repoName + '/tree/' + item.payload.ref;
      itemMessage = (
        <div className="forms-dashboard-item-message">
          {(item.payload.ref_type === 'branch') && (<GitBranch />)}
          {(item.payload.ref_type === 'repository') && (<Repo />)}
          {(item.paylaod.ref_type === 'tag') && (<Tag />)}
          &nbsp;Created a {item.payload.ref_type} {(item.payload.ref_type !== 'repository') && (<a target="_blank" href={refUrl}>{item.payload.ref}</a>)}
          &nbsp;<a target="_blank" href={item.repoUrl}>{item.repoName}</a>
        </div>);
    } else if (item.type === 'ForkEvent') {
      itemMessage = (
        <div className="forms-dashboard-item-message">
          <RepoForked />
          &nbsp;Forked a repository from <a target="_blank" href={item.repoUrl}>{item.repoName}</a>
          &nbsp;to <a target="_blank" href={item.payload.forkee.owner.html_url}>{item.payload.forkee.full_name}</a>
        </div>);
    } else if (item.type === 'IssueCommentEvent') {
      itemMessage = (
        <div className="forms-dashboard-item-message">
          <Comment />
          &nbsp;{item.payload.action.slice(0, 1).toUpperCase()}{item.payload.action.slice(1)}
          <a target="_blank" href={item.payload.comment.html_url}> a comment</a>
          &nbsp;to <a target="_blank" href={item.payload.issue.html_url}>an issue</a>
        </div>);
    } else if (item.type === 'IssuesEvent') {
      itemMessage = (
        <div className="forms-dashboard-item-message">
          {(item.payload.action === 'closed') && (<IssueClosed />)}
          {(item.payload.action === 'reopened') && (<IssueReopened />)}
          {((item.payload.action !== 'closed') && (item.payload.action !== 'reopened')) && (<IssueOpened />)}
          &nbsp;{item.payload.action.slice(0, 1).toUpperCase()}{item.payload.action.slice(1)}
          <a target="_blank" href={item.payload.issue.html_url}> an issue</a>
          &nbsp;at <a target="_blank" href={item.repoUrl}>{item.repoName}</a>
        </div>);
    } else if (item.type === 'PullRequestEvent') {
      itemMessage = (
        <div className="forms-dashboard-item-message">
          <GitPullRequest />
          &nbsp;{item.payload.action.slice(0, 1).toUpperCase()}{item.payload.action.slice(1)}
          &nbsp;<a target="_blank" href={item.payload.pull_request.html_url}>a pull request</a>
          &nbsp;at <a target="_blank" href={item.repoUrl}>{item.repoName}</a>
        </div>);
    } else if (item.type === 'PushEvent') {
      const commitUrl = 'https://github.com/' + item.repoName + '/commit/' + item.payload.commits[0].sha;
      itemMessage = (
        <div className="forms-dashboard-item-message">
          <RepoPush />
          &nbsp;Pushed <a target="_blank" href={commitUrl}>a commit</a> to <a target="_blank" href={item.repoUrl}>{item.repoName}</a>
        </div>);
    } else if (item.type === 'WatchEvent') {
      itemMessage = (
        <div className="forms-dashboard-item-message">
          <Star />
          &nbsp;Starred a repository <a target="_blank" href={item.repoUrl}>{item.repoName}</a>
        </div>);
    }

    const lightgrayColor = {
      color: '#CDCDCD',
    };
    /*if (item.type === 'CreateEvent') {
      const refUrl = 'https://github.com/' + item.repoName + '/tree/' + item.payload.ref;
      return (
        <div className="forms-dashboard-item">
          <br />
          Created a {item.payload.ref_type} {(item.payload.ref_type !== 'repository') && (<a href={refUrl}>{item.payload.ref}</a>)}
          &nbsp;at <a href={item.repoUrl}>{item.repoName}</a>
          <br />at {(new Date(item.date)).toString().slice(0, 10)}<br />
        </div>
      );
    } else if (item.type === 'ForkEvent') {
      return (
        <div className="forms-dashboard-item">
          <br />
          Forked a repository from <a href={item.repoUrl}>{item.repoName}</a>
           to <a href={item.payload.forkee.owner.html_url}>{item.payload.forkee.full_name}</a>
          <br />at {(new Date(item.date)).toString().slice(0, 10)}<br />
        </div>
      );
    } else if (item.type === 'IssueCommentEvent') {
      return (
        <div className="forms-dashboard-item">
          <br />
          {item.payload.action.slice(0, 1).toUpperCase()}{item.payload.action.slice(1)}
          <a href={item.payload.comment.html_url}> a comment</a>
          &nbsp;to <a href={item.payload.issue.html_url}>an issue</a>
          <br />at {(new Date(item.date)).toString().slice(0, 10)}<br />
        </div>
      );
    } else if (item.type === 'IssuesEvent') {
      return (
        <div className="forms-dashboard-item">
          <br />
          Created a {item.payload.ref_type} <a href={item.repoUrl}>{item.repoName}</a>
          <br />at {(new Date(item.date)).toString().slice(0, 10)}<br />
        </div>
      );
    } else if (item.type === 'PullRequestEvent') {
      return (
        <div className="forms-dashboard-item">
          <br />
          Pull request <a href={item.repoUrl}>{item.repoName}</a>
          <br />at {(new Date(item.date)).toString().slice(0, 10)}<br />
        </div>
      );
    } else if (item.type === 'PushEvent') {
      const commitUrl = 'https://github.com/' + item.repoName + '/commit/' + item.payload.commits[0].sha;
      return (
        <div className="forms-dashboard-item">
          <br />
          Pushed <a href={commitUrl}>a commit</a> to <a href={item.repoUrl}>{item.repoName}</a>
          <br />at {(new Date(item.date)).toString().slice(0, 10)}<br />
        </div>
      );
    } else if (item.type === 'WatchEvent') {
      return (
        <div className="forms-dashboard-item">
          <br />
          Starred a repository <a href={item.repoUrl}>{item.repoName}</a>
          <br />at {(new Date(item.date)).toString().slice(0, 10)}<br />
        </div>
      );
    }*/
    return (
      <div className="forms-dashboard-item">
        <br />
        {itemMessage}
        <div style={lightgrayColor} className="forms-dashboard-item-date">
          at {(new Date(item.date)).toString().slice(0, 10)}
        </div>
        <br />
      </div>
    );
  }
}

DashboardItem.propTypes = {
  itemObject: PropTypes.object,
};

DashboardItem.defaultProps = {
  itemObject: undefined,
};

export default DashboardItem;
