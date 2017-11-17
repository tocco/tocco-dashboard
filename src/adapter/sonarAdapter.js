import fetch from 'node-fetch';

const transformResponse = (label, response) => ({
  title: label,
  type: 'metric',
  data: response.component.measures[0].value,
});

export default {
  getPromise: apiConfig => {
    const url = `https://sonar.tocco.ch/api/measures/component?componentKey= ch.tocco.nice2%3Anice2%3Amaster&metricKeys=${
      apiConfig.metricKey
    }`;

    const headers = {
      Accept: 'application/json',
    };

    return fetch(url, { method: 'GET', headers })
      .then(response => response.json())
      .then(response => transformResponse(apiConfig.label, response));
  },
};
