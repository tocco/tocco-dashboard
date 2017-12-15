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
    children: [
      {
        label: '2.7.5 ➞ 2.8',
        buildId: 'Nice2AutoMerge_Releases275toIntegrationReleases28',
      },
      {
        label: '2.8 ➞ 2.9',
        buildId: 'Nice2AutoMerge_Releases28toIntegrationReleases29',
      },
      {
        label: '2.9 ➞ 2.10',
        buildId: 'Nice2AutoMerge_Releases29toIntegrationReleases210',
      },
      {
        label: '2.10 ➞ 2.11',
        buildId: 'Nice2AutoMerge_Releases210toIntegrationReleases211',
      },
      {
        label: '2.11 ➞ 2.12',
        buildId: 'Nice2AutoMerge_Releases211toIntegrationMaster',
      },
      {
        label: '2.12 ➞ 2.13',
        buildId: 'Nice2AutoMerge_Releases212toIntegrationMaster',
      },
      {
        label: '2.13 ➞ 2.14',
        buildId: 'Nice2AutoMerge_Releases213toIntegrationMaster',
      },
      {
        label: '2.14 ➞ 2.15',
        buildId: 'Nice2AutoMerge_Releases214toIntegration_Releases215',
      },
      {
        label: '2.15 ➞ master',
        buildId: 'Nice2AutoMerge_Releases215toIntegrationMaster',
      },
    ],
  },
  {
    groupTitle: 'Sonar',
    priority: 40,
    columnClass: 'col-12',
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
    groupTitle: 'Chuck Norris',
    priority: 10,
    type: 'chucknorris',
    children: [
      {
        limitTo: 'nerdy,explicit',
      },
    ],
  },
];
