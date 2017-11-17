import teamcityAdapter from './teamcityAdapter';
import backofficeAdapter from './backofficeAdapter';
import sonarAdapter from './sonarAdapter';

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
    return null;
  },
};
