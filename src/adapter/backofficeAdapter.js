import base64 from 'base-64';
import fetch from 'node-fetch';
import logError from '../error';

/*
 * We need to send our session ID as nice_auth cookie with every request to prevent the backoffice
 * from creating a new session for every request.
 *
 * Usually, this can be done by simply adding the fetch option `credentials: 'include'`.
 * However, node-fetch (https://github.com/bitinn/node-fetch) hasn't implemented this property at this stage.
 *
 * As a workaround, we extract and send the cookie manually.
 */
let sessionId = null;

const transformResponse = (label, response) => {
  const labels = response.data.map(
    installation => installation.fields.instance.value,
  );

  if (labels.length === 0) {
    return null;
  }

  return {
    title: label,
    type: 'labelList',
    data: labels,
  };
};

const extractAndStoreSessionId = response => {
  const cookie = response.headers.get('set-cookie');
  if (cookie) {
    const match = cookie.match(/nice_auth=([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})/);
    if (match && match[1]) {
      sessionId = match[1];
    }
  }
  return response;
};

export default {
  getPromise: (apiConfig, username, password) => {
    const headers = {
      Accept: 'application/json',
      Authorization: `Basic ${base64.encode(`${username}:${password}`)}`,
    };
    if (sessionId) {
      headers.cookie = 'nice_auth=' + sessionId;
    }

    return fetch(apiConfig.url, { method: 'GET', headers })
      .then(response => extractAndStoreSessionId(response))
      .then(response => response.json())
      .then(response => transformResponse(apiConfig.label, response))
      .catch(error =>
        logError('backofficeAdapter', 'labelList', error, apiConfig),
      );
  },
};
