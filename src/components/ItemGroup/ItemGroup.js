import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ItemGroup.css';

import typeFactory from './typeFactory';

class ItemGroup extends React.Component {
  static propTypes = {
    group: PropTypes.shape({
      title: PropTypes.string,
      children: PropTypes.array,
    }).isRequired,
  };

  render() {
    return (
      <div className={s.itemGroup}>
        <div className="card">
          <div className="card-header">{this.props.group.title}</div>
          <div className="card-block">
            <div className="row">
              {this.props.group.children.map(item => (
                <div className="col-md-3 mx-auto">{typeFactory(item)}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ItemGroup);
