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
import s from './Signal.css';

class Signal extends React.Component {
  static propTypes = {
    positive: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.signal}>
        {this.props.title}: {JSON.stringify(this.props.positive)}
      </div>
    );
  }
}

export default withStyles(s)(Signal);
