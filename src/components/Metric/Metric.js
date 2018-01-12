/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import m from './Metric.css';

class Metric extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    diff: PropTypes.number.isRequired,
    positivePositive: PropTypes.bool.isRequired,
  };

  render() {
    const arrowClass = this.props.diff > 0 ? 'fa-arrow-up' : 'fa-arrow-down';
    const arrowColor =
      (this.props.positivePositive && this.props.diff > 0) ||
      (!this.props.positivePositive && this.props.diff < 0)
        ? 'text-success'
        : 'text-danger';
    return (
      <span className={m.metric}>
        <strong>{this.props.title}:</strong>&nbsp;
        {this.props.value}&nbsp;
        <i
          className={`fa ${arrowClass} ${arrowColor}`}
          aria-hidden="true"
        />&nbsp;
        <span className={m.diff}>
          ({this.props.diff > 0 ? '+' : ''}
          {this.props.diff})
        </span>
      </span>
    );
  }
}

export default withStyles(m)(Metric);
