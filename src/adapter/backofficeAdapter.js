import base64 from 'base-64';
import fetch from 'node-fetch';
import logError from '../components/Error';

const transformResponse = (label, response) => {
  const labels = response.data.map(
    installation => installation.fields.instance.value,
  );

  return {
    title: label,
    type: 'labelList',
    data: labels,
  };
};

export default {
  getPromise: (apiConfig, username, password) => {
    const headers = {
      Accept: 'application/json',
      Authorization: `Basic ${base64.encode(`${username}:${password}`)}`,
    };

    return fetch(apiConfig.url, { method: 'GET', headers })
      .then(response => response.json())
      .then(response => transformResponse(apiConfig.label, response))
      .catch(error =>
        logError('backofficeAdapter', 'labelList', error, apiConfig),
      );
  },
};
