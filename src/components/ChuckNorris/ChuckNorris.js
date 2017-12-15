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
import m from './ChuckNorris.css';

class ChuckNorris extends React.Component {
  static propTypes = {
    joke: PropTypes.string.isRequired,
  };

  render() {
    return <p className={m.paragraph}>{this.props.joke}</p>;
  }
}

export default withStyles(m)(ChuckNorris);
