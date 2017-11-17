module.exports = [
  {
    groupTitle: 'Teamcity Merges',
    priority: 50,
    type: 'teamcity',
    children: [
      {
        label: 'Merge 2.7.5 -> 2.8',
        buildId: 'Nice2AutoMerge_Releases275toIntegrationReleases28',
      },
      {
        label: 'Merge 2.8 -> 2.9',
        buildId: 'Nice2AutoMerge_Releases28toIntegrationReleases29',
      },
      {
        label: 'Merge 2.9 -> 2.10',
        buildId: 'Nice2AutoMerge_Releases29toIntegrationReleases210',
      },
      {
        label: 'Merge 2.10 -> 2.11',
        buildId: 'Nice2AutoMerge_Releases210toIntegrationReleases211',
      },
      {
        label: 'Merge 2.11 -> 2.12',
        buildId: 'Nice2AutoMerge_Releases211toIntegrationMaster',
      },
      {
        label: 'Merge 2.12 -> 2.13',
        buildId: 'Nice2AutoMerge_Releases212toIntegrationMaster',
      },
      {
        label: 'Merge 2.13 -> 2.14',
        buildId: 'Nice2AutoMerge_Releases213toIntegrationMaster',
      },
      {
        label: 'Merge 2.14 -> 2.15',
        buildId: 'Nice2AutoMerge_Releases214toIntegration_Releases215',
      },
      {
        label: 'Merge 2.15 -> master',
        buildId: 'Nice2AutoMerge_Releases215toIntegrationMaster',
      },
    ],
  },
];
