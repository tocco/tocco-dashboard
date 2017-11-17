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
import s from './Dashboard.css';

import ItemGroup from '../ItemGroup/ItemGroup';

class Dashboard extends React.Component {
  static contextTypes = {
    fetch: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = { data: undefined };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    const options = {
      headers: new Headers({ 'Content-Type': 'application/json' }),
    };
    this.data = this.context
      .fetch('http://localhost:3000/api', options)
      .then(resp => resp.json())
      .then(resp => {
        this.setState({ data: resp });
      });
  }

  render() {
    if (!this.state.data) {
      return null;
    }

    return this.state.data.map(group => (
      <ItemGroup group={group} className={s.itemGroup} />
    ));
  }
}

export default withStyles(s)(Dashboard);
