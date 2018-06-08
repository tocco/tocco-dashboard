import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ItemGroup.css';
import emptyImg from './empty.png';

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
          <div className={`card-body ${s['card-body']}`}>{this.getBody()}</div>
        </div>
      </div>
    );
  }

  getBody() {
    const children = this.props.group.children
      .filter(item => !!item)
      .map(item => typeFactory(item));

    if (children.length > 0) {
      return children;
    }

    return this.getEmptyContent();
  }

  getEmptyContent() {
    return (
      <div
        className={`card-body-empty-content ${s['card-body-empty-content']}`}
      >
        <img src={emptyImg} />
      </div>
    );
  }
}

export default withStyles(s)(ItemGroup);
