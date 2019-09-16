import teamcityAdapter from './teamcityAdapter';
import backofficeAdapter from './backofficeAdapter';

export default {
  getAdapter: adapterName => {
    if (adapterName === 'teamcity') {
      return teamcityAdapter;
    }
    if (adapterName === 'backoffice') {
      return backofficeAdapter;
    }
    return null;
  },
};
