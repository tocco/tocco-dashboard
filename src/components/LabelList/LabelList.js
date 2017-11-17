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
import Signal from '../Signal/Signal';

class LabelList extends React.Component {
  static propTypes = {
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  render() {
    return this.props.labels.map(label => (
      <Signal title={label} positive={false} />
    ));
  }
}

export default LabelList;
