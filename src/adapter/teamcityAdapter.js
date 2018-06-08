import base64 from 'base-64';
import fetch from 'node-fetch';
import logError from '../error';

const transformResponse = (label, response, typeAdapterArgs) => {
  const success = response.status === 'SUCCESS';

  if (typeAdapterArgs && typeAdapterArgs.hideSuccess === true && success) {
    return null;
  }

  return {
    title: label,
    type: 'boolean',
    data: {
      value: success,
      date: response.finishDate,
    },
  };
};

export default {
  getPromise: (apiConfig, username, password, typeAdapterArgs) => {
    const url = `https://tc.tocco.ch/app/rest/latest/buildTypes/id:${
      apiConfig.buildId
    }/builds/count:1`;

    const headers = {
      Accept: 'application/json',
      Authorization: `Basic ${base64.encode(`${username}:${password}`)}`,
    };

    return fetch(url, { method: 'GET', headers })
      .then(response => response.json())
      .then(response =>
        transformResponse(apiConfig.label, response, typeAdapterArgs),
      )
      .catch(error => logError('teamcityAdapter', 'boolean', error, apiConfig));
  },
};
