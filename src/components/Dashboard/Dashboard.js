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
import sprintf from 'sprintf';
import s from './Dashboard.css';
import ItemGroup from '../ItemGroup/ItemGroup';
import Signal from '../Signal/Signal';

class Dashboard extends React.Component {
  static contextTypes = {
    fetch: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      data: undefined,
      reloadInMillisecond: 60000,
      timer: {},
    };
    this.updateTimer = this.updateTimer.bind(this);
  }

  componentDidMount() {
    this.startTimer();
    this.loadData();
  }

  startTimer() {
    this.setState({
      timer: {
        elapsedSeconds: 0,
        elapsedTime: this.secondsToTime(0),
        overtime: false,
      },
    });

    setInterval(this.updateTimer, 1000);
  }

  updateTimer() {
    const elapsedSeconds = this.state.timer.elapsedSeconds + 1;
    const elapsedTime = this.secondsToTime(elapsedSeconds);
    const overtime = elapsedSeconds > this.state.reloadInMillisecond / 1000 + 3;

    this.setState({
      timer: {
        elapsedSeconds,
        elapsedTime,
        overtime,
      },
    });
  }

  /* eslint-disable */
  secondsToTime(secs) {
    const hours = Math.floor(secs / 3600);
    const minutes = Math.floor((secs % 3600) / 60);
    const seconds = secs % 60;
    let elapsedTime;

    if (hours > 0) {
      elapsedTime = sprintf('%d:%02d:%02d', hours, minutes, seconds);
    } else if (minutes > 0) {
      elapsedTime = sprintf('%02d:%02d', minutes, seconds);
    } else {
      elapsedTime = sprintf('%d Sekunden', seconds);
    }

    return elapsedTime;
  }
  /* eslint-enable */

  loadData() {
    const options = {
      headers: new Headers({ 'Content-Type': 'application/json' }),
    };
    let url = `${window.location.protocol}//${window.location.host}/api`;
    this.data = this.context
      .fetch(url, options)
      .then(resp => resp.json())
      .then(resp => {
        this.setState({ data: resp });
        this.setState({
          timer: {
            elapsedSeconds: 0,
            elapsedTime: this.secondsToTime(0),
          },
        });
        setTimeout(() => this.loadData(), this.state.reloadInMillisecond);
      });
  }

  render() {
    if (!this.state.data) {
      return null;
    }

    return (
      <div className="container-fluid">
        <div className={`row ${s.header}`}>
          <div className="col">
            <h1>Tocco&nbsp;Dev&nbsp;Dashboard</h1>
          </div>
          <div className="col">
            <Signal
              title={`aktualisiert vor ${this.state.timer.elapsedTime}`}
              positive={!this.state.timer.overtime}
            />
          </div>
        </div>
        <div className="row">
          {this.state.data.map(group => <ItemGroup group={group} />)}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Dashboard);
