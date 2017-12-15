import fetch from 'node-fetch';

const transformResponse = (apiConfig, response) => ({
  title: apiConfig.label,
  type: 'chuckNorris',
  data: {
    value: response.value.joke,
  },
});

export default {
  getPromise: apiConfig => {
    const url = `http://api.icndb.com/jokes/random?limitTo=[${
      apiConfig.limitTo
    }]`;

    const headers = {
      Accept: 'application/json',
    };

    return fetch(url, { method: 'GET', headers })
      .then(response => response.json())
      .then(response => transformResponse(apiConfig, response));
  },
};
