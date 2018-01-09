import base64 from 'base-64';
import fetch from 'node-fetch';
import logError from '../error';

const transformResponse = (label, response) => ({
  title: label,
  type: 'boolean',
  data: {
    value: response.status === 'SUCCESS',
    date: response.finishDate,
  },
});

export default {
  getPromise: (apiConfig, username, password) => {
    const url = `https://dev.tocco.ch/teamcity/app/rest/latest/buildTypes/id:${
      apiConfig.buildId
    }/builds/count:1`;

    const headers = {
      Accept: 'application/json',
      Authorization: `Basic ${base64.encode(`${username}:${password}`)}`,
    };

    return fetch(url, { method: 'GET', headers })
      .then(response => response.json())
      .then(response => transformResponse(apiConfig.label, response))
      .catch(error => logError('teamcityAdapter', 'boolean', error, apiConfig));
  },
};
