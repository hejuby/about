import React from 'react';
import PropTypes from 'prop-types';

import Star from 'react-icons/lib/go/star';

class RecentItem extends React.Component {
  render() {
    const item = this.props.itemObject;
    return (
      <div className="forms-github-recent-item">
        <a target="_blank" href={item.url}>{item.name}</a>
        ({item.language}) {/* - Stars: */} <Star />{item.stars}{/* , Size: {item.size}
        , Updated at {(new Date(item.updateDate)).toString().slice(0, 10)} */}<br />
        - {item.description}<br /><br />
      </div>
    );
  }
}

RecentItem.propTypes = {
  itemObject: PropTypes.object,
};

RecentItem.defaultProps = {
  itemObject: undefined,
};

export default RecentItem;
