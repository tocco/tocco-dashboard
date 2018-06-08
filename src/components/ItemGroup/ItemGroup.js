import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ItemGroup.css';

import typeFactory from './typeFactory';

class ItemGroup extends React.Component {
  static propTypes = {
    group: PropTypes.shape({
      children: PropTypes.array,
      columnClass: PropTypes.string,
      title: PropTypes.string,
    }).isRequired,
  };

  render() {
    return (
      <div className={this.props.group.columnClass}>
        <div className={`card ${s.card}`}>
          <div className={`card-header ${s['card-header']}`}>
            {this.props.group.title}
          </div>
          <div className={`card-body ${s['card-body']}`}>
            {this.props.group.children
              .filter(item => !!item)
              .map(item => typeFactory(item))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ItemGroup);
