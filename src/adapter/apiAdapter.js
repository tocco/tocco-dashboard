import teamcityAdapter from './teamcityAdapter';

export default {
  getAdapter: adapterName => {
    if (adapterName === 'teamcity') {
      return teamcityAdapter;
    }
    return null;
  },
};
