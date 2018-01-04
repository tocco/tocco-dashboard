import fetch from 'node-fetch';
import logError from '../components/Error';

const transformResponse = (apiConfig, response) => ({
  title: apiConfig.label,
  type: 'metric',
  data: {
    value: (1 * response.component.measures[0].value).toFixed(
      apiConfig.decimalPlaces,
    ),
    diff: (1 * response.component.measures[0].periods[2].value).toFixed(
      apiConfig.decimalPlaces,
    ),
    positivePositive: apiConfig.positivePositive,
  },
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
      .then(response => transformResponse(apiConfig, response))
      .catch(error => logError('sonarAdapter', 'metric', error, apiConfig));
  },
};
