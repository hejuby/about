import React from 'react';
import PropTypes from 'prop-types';

class RecentSort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'stars',
    };
    this.updateChange = this.updateChange.bind(this);
  }

  componentWillMount() {
    this.updateArray(this.props.itemArray, this.state.value);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      this.updateArray(this.props.itemArray, this.state.value);
    }
  }

  sortArray(myArray, sortBy) {
    const length = myArray.length - 1;
    const newArray = myArray;
    for (const i of [...Array(length).keys()]) {
      for (const j of [...Array(length - i).keys()]) {
        if (newArray[j][sortBy] < newArray[j + 1][sortBy]) {
          const tmp = newArray[j];
          newArray[j] = newArray[j + 1];
          newArray[j + 1] = tmp;
        }
      }
    }

    return newArray;
  }

  updateChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  updateArray(myArray, sortBy) {
    const newArray = this.sortArray(myArray, sortBy);
    this.props.onUpdate(newArray);
  }

  render() {
    return (
      <div className="forms-github-recent-sort">
        <form>
          Sort By&nbsp;
          <select value={this.state.value} onChange={this.updateChange}>
            <option value="stars">Stars</option>
            <option value="size">Size</option>
            <option value="updateDate">Update Date</option>
          </select>
        </form>
      </div>
    );
  }
}

// class RecentSort extends React.Component {
//   sortArray(array, sortBy) {
//     var length = array.length - 1;
//     for (var i of [...Array(length).keys()]) {
//       for (var j of [...Array(length - i).keys()]) {
//         if (array[j][sortBy] < array[j+1][sortBy]) {
//           var tmp = array[j];
//           array[j] = array[j+1];
//           array[j+1] = tmp;
//         }
//       }
//     }
//
//     return array;
//   }
//
//   updateSort(event) {
//     var array = this.sortArray(this.props.itemArray, event.target.value);
//     this.props.onUpdate(array);
//   }
//
//   render() {
//     return (
//       <div className="forms-github-recent-sort">
//         <select onChange={this.updateSort.bind(this)}>
//           <option>Sort By</option>
//           <option value="stars">Stars</option>
//           <option value="size">Size</option>
//           <option value="updateDate">Update Date</option>
//         </select>
//       </div>
//     );
//   }
// }

RecentSort.propTypes = {
  itemArray: PropTypes.array,
  onUpdate: PropTypes.func,
};

RecentSort.defaultProps = {
  itemArray: undefined,
  onUpdate: undefined,
};

export default RecentSort;
