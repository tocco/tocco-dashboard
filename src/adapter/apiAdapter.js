import teamcityAdapter from './teamcityAdapter';
import backofficeAdapter from './backofficeAdapter';
import sonarAdapter from './sonarAdapter';
import chuckNorrisAdapter from './chuckNorrisAdapter';

export default {
  getAdapter: adapterName => {
    if (adapterName === 'teamcity') {
      return teamcityAdapter;
    }
    if (adapterName === 'backoffice') {
      return backofficeAdapter;
    }
    if (adapterName === 'sonar') {
      return sonarAdapter;
    }
    if (adapterName === 'chucknorris') {
      return chuckNorrisAdapter;
    }
    return null;
  },
};
