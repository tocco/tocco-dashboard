export default [
  {
    groupTitle: 'Critical Installations',
    priority: 99,
    columnClass: 'col-md-6',
    type: 'backoffice',
    children: [
      {
        label: 'Critical Installations',
        url:
          'https://www.tocco.ch/nice2/rest/entities/Installation?_where=relInstallation_service_status.unique_id=="critical"',
      },
    ],
  },
  {
    groupTitle: 'DB Refactoring',
    priority: 90,
    columnClass: 'col-md-6',
    type: 'teamcity',
    children: [
      {
        label: 'DB-Refactoring Master',
        buildId:
          'Nice2DatabaseRefactoring_Nice2dbRefactoringExistingDatabaseMaster',
      },
    ],
  },
  {
    groupTitle: 'TeamCity – Merge Branches',
    priority: 50,
    columnClass: 'col-12',
    type: 'teamcity',
    typeAdapterArgs: {
      hideSuccess: true,
    },
    children: [
      {
        label: '2.7.5 ➞ int/2.8',
        buildId: 'Nice2AutoMerge_Releases275toIntegrationReleases28',
      },
      {
        label: 'int/2.8 ➞ 2.8',
        buildId: 'Nice2AutoMerge_IntegrationReleases28toReleases28',
      },
      {
        label: '2.8 ➞ int/2.9',
        buildId: 'Nice2AutoMerge_Releases28toIntegrationReleases29',
      },
      {
        label: 'int/2.9 ➞ 2.9',
        buildId: 'Nice2AutoMerge_IntegrationReleases29toReleases29',
      },
      {
        label: '2.9 ➞ int/2.10',
        buildId: 'Nice2AutoMerge_Releases29toIntegrationReleases210',
      },
      {
        label: 'int/2.10 ➞ 2.10',
        buildId: 'Nice2AutoMerge_IntegrationReleases210toReleases210',
      },
      {
        label: '2.10 ➞ int/2.11',
        buildId: 'Nice2AutoMerge_Releases210toIntegrationReleases211',
      },
      {
        label: 'int/2.11 ➞ 2.11',
        buildId: 'Nice2AutoMerge_IntegrationReleases211toReleases211',
      },
      {
        label: '2.11 ➞ int/2.12',
        buildId: 'Nice2AutoMerge_Releases211toIntegrationMaster',
      },
      {
        label: 'int/2.12 ➞ 2.12',
        buildId: 'Nice2AutoMerge_IntegrationReleases212toReleases212',
      },
      {
        label: '2.12 ➞ int/2.13',
        buildId: 'Nice2AutoMerge_Releases212toIntegrationMaster',
      },
      {
        label: 'int/2.13 ➞ 2.13',
        buildId: 'Nice2AutoMerge_IntegrationReleases213toReleases213',
      },
      {
        label: '2.13 ➞ int/2.14',
        buildId: 'Nice2AutoMerge_Releases213toIntegrationMaster',
      },
      {
        label: 'int/2.14 ➞ 2.14',
        buildId: 'Nice2AutoMerge_IntegrationReleases214toReleases214',
      },
      {
        label: '2.14 ➞ int/2.15',
        buildId: 'Nice2AutoMerge_Releases214toIntegrationReleases215',
      },
      {
        label: 'int/2.15 ➞ 2.15',
        buildId: 'Nice2AutoMerge_IntegrationReleases215toReleases215',
      },
      {
        label: '2.15 ➞ int/2.16',
        buildId: 'Nice2AutoMerge_Releases215toIntegrationReleases216',
      },
      {
        label: 'int/2.16 ➞ 2.16',
        buildId: 'Nice2AutoMerge_IntegrationReleases216toReleases216',
      },
      {
        label: '2.16 ➞ int/2.17',
        buildId: 'Nice2AutoMerge_Releases216toIntegrationReleases217',
      },
      {
        label: 'int/2.17 ➞ 2.17',
        buildId: 'Nice2AutoMerge_IntegrationReleases217toReleases217',
      },
      {
        label: '2.17 ➞ int/master',
        buildId: 'Nice2AutoMerge_Releases217toIntegrationMaster',
      },
      {
        label: 'int/master ➞ master',
        buildId: 'Nice2AutoMerge_IntegrationMasterToMaster',
      },
    ],
  },
  {
    groupTitle: 'Sonar',
    priority: 40,
    columnClass: 'col-6',
    type: 'sonar',
    children: [
      {
        label: 'Critical Issues',
        metricKey: 'critical_violations',
        positivePositive: false,
        decimalPlaces: 0,
      },
      {
        label: 'Coverage',
        metricKey: 'coverage',
        positivePositive: true,
        decimalPlaces: 2,
      },
    ],
  },
  {
    groupTitle: 'Programming like Chuck Norris',
    priority: 10,
    columnClass: 'col-6',
    type: 'chucknorris',
    children: [
      {
        limitTo: 'nerdy,explicit',
      },
    ],
  },
];
