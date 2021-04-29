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
    typeAdapterArgs: {
      hideSuccess: true,
    },
    children: [
      {
        label: 'master - existing',
        buildId:
          'Nice2DatabaseRefactoring_Nice2dbRefactoringExistingDatabaseMaster',
      },
      {
        label: 'master - new',
        buildId: 'Nice2DatabaseRefactoring_Nice2dbRefactoringNewDatabaseMaster',
      },
      {
        label: '2.29 - existing',
        buildId:
          'Nice2DatabaseRefactoring_Nice2dbRefactoringExistingDatabase229',
      },
      {
        label: '2.29 - new',
        buildId: 'Nice2DatabaseRefactoring_Nice2dbRefactoringNewDatabase229',
      },
      {
        label: '2.28 - existing',
        buildId:
          'Nice2DatabaseRefactoring_Nice2dbRefactoringExistingDatabase228',
      },
      {
        label: '2.28 - new',
        buildId: 'Nice2DatabaseRefactoring_Nice2dbRefactoringNewDatabase228',
      },
      {
        label: '2.27 - existing',
        buildId:
          'Nice2DatabaseRefactoring_Nice2dbRefactoringExistingDatabase227',
      },
      {
        label: '2.27 - new',
        buildId: 'Nice2DatabaseRefactoring_Nice2dbRefactoringNewDatabase227',
      },
      {
        label: '2.26 - existing',
        buildId:
          'Nice2DatabaseRefactoring_Nice2dbRefactoringExistingDatabase226',
      },
      {
        label: '2.26 - new',
        buildId: 'Nice2DatabaseRefactoring_Nice2dbRefactoringNewDatabase226',
      },
      {
        label: '2.25 - existing',
        buildId:
          'Nice2DatabaseRefactoring_Nice2dbRefactoringExistingDatabase225',
      },
      {
        label: '2.25 - new',
        buildId: 'Nice2DatabaseRefactoring_Nice2dbRefactoringNewDatabase225',
      },
      {
        label: '2.24 - existing',
        buildId:
          'Nice2DatabaseRefactoring_Nice2dbRefactoringExistingDatabase224',
      },
      {
        label: '2.24 - new',
        buildId: 'Nice2DatabaseRefactoring_Nice2dbRefactoringNewDatabase224',
      },
      {
        label: '2.23 - existing',
        buildId:
          'Nice2DatabaseRefactoring_Nice2dbRefactoringExistingDatabase222',
      },
      {
        label: '2.23 - new',
        buildId: 'Nice2DatabaseRefactoring_Nice2dbRefactoringNewDatabase223',
      },
      {
        label: '2.22 - existing',
        buildId:
          'Nice2DatabaseRefactoring_Nice2dbRefactoringExistingDatabase223',
      },
      {
        label: '2.22 - new',
        buildId: 'Nice2DatabaseRefactoring_Nice2dbRefactoringNewDatabase222',
      },
      {
        label: '2.21 - existing',
        buildId:
          'Nice2DatabaseRefactoring_Nice2dbRefactoringExistingDatabase221',
      },
      {
        label: '2.21 - new',
        buildId: 'Nice2DatabaseRefactoring_Nice2dbRefactoringNewDatabase221',
      },
      {
        label: '2.20 - existing',
        buildId:
          'Nice2DatabaseRefactoring_Nice2dbRefactoringExistingDatabase220',
      },
      {
        label: '2.20 - new',
        buildId: 'Nice2DatabaseRefactoring_Nice2dbRefactoringNewDatabase220',
      },
      {
        label: '2.19 - existing',
        buildId:
          'Nice2DatabaseRefactoring_Nice2dbRefactoringExistingDatabase219',
      },
      {
        label: '2.19 - new',
        buildId: 'Nice2DatabaseRefactoring_Nice2dbRefactoringNewDatabase219',
      },
      {
        label: '2.18 - existing',
        buildId:
          'Nice2DatabaseRefactoring_Nice2dbRefactoringExistingDatabase218',
      },
      {
        label: '2.18 - new',
        buildId: 'Nice2DatabaseRefactoring_Nice2dbRefactoringNewDatabase218',
      },
      {
        label: '2.17 - existing',
        buildId:
          'Nice2DatabaseRefactoring_Nice2dbRefactoringExistingDatabase217',
      },
      {
        label: '2.17 - new',
        buildId: 'Nice2DatabaseRefactoring_Nice2dbRefactoringNewDatabase217',
      },
      {
        label: '2.16 - existing',
        buildId:
          'Nice2DatabaseRefactoring_Nice2dbRefactoringExistingDatabaseV216',
      },
      {
        label: '2.16 - new',
        buildId: 'Nice2DatabaseRefactoring_Nice2dbRefactoringNewDatabaseV216',
      },
      {
        label: '2.15 - existing',
        buildId:
          'Nice2DatabaseRefactoring_Nice2dbRefactoringExistingDatabaseV215',
      },
      {
        label: '2.15 - new',
        buildId: 'Nice2DatabaseRefactoring_Nice2dbRefactoringNewDatabaseV215',
      },
    ],
  },
  {
    groupTitle: 'Merges',
    priority: 50,
    columnClass: 'col-md-6',
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
        label: '2.17 ➞ int/2.18',
        buildId: 'Nice2AutoMerge_Releases217toIntegrationReleases218',
      },
      {
        label: 'int/2.18 ➞ 2.18',
        buildId: 'Nice2AutoMerge_IntegrationReleases218toReleases218',
      },
      {
        label: '2.18 ➞ int/2.19',
        buildId: 'Nice2AutoMerge_Releases218toIntegrationReleases219',
      },
      {
        label: 'int/2.19 ➞ 2.19',
        buildId: 'Nice2AutoMerge_IntegrationReleases219toReleases219',
      },
      {
        label: '2.19 ➞ int/2.20',
        buildId: 'Nice2AutoMerge_Releases219toIntegrationReleases220',
      },
      {
        label: 'int/2.20 ➞ 2.20',
        buildId: 'Nice2AutoMerge_IntegrationReleases220toReleases220',
      },
      {
        label: '2.20 ➞ int/2.21',
        buildId: 'Nice2AutoMerge_Releases220toIntegrationReleases221',
      },
      {
        label: 'int/2.21 ➞ 2.21',
        buildId: 'Nice2AutoMerge_IntegrationReleases221toReleases221',
      },
      {
        label: '2.21 ➞ int/2.22',
        buildId: 'Nice2AutoMerge_Releases221toIntegrationReleases222',
      },
      {
        label: 'int/2.22 ➞ 2.22',
        buildId: 'Nice2AutoMerge_IntegrationReleases222toReleases222',
      },
      {
        label: '2.22 ➞ int/2.23',
        buildId: 'Nice2AutoMerge_Releases222toIntegrationReleases223',
      },
      {
        label: 'int/2.23 ➞ 2.23',
        buildId: 'Nice2AutoMerge_IntegrationReleases223toReleases223',
      },
      {
        label: '2.23 ➞ int/2.24',
        buildId: 'Nice2AutoMerge_Releases223toIntegrationReleases224',
      },
      {
        label: 'int/2.24 ➞ 2.24',
        buildId: 'Nice2AutoMerge_IntegrationReleases224toReleases224',
      },
      {
        label: '2.24 ➞ int/2.25',
        buildId: 'Nice2AutoMerge_Releases224toIntegrationReleases225',
      },
      {
        label: 'int/2.25 ➞ 2.25',
        buildId: 'Nice2AutoMerge_IntegrationReleases225toReleases225',
      },
      {
        label: '2.25 ➞ int/2.26',
        buildId: 'Nice2AutoMerge_Releases225toIntegrationReleases226',
      },
      {
        label: 'int/2.26 ➞ 2.26',
        buildId: 'Nice2AutoMerge_IntegrationReleases226toReleases226',
      },
      {
        label: '2.26 ➞ int/2.27',
        buildId: 'Nice2AutoMerge_Releases226toIntegrationReleases227',
      },
      {
        label: 'int/2.27 ➞ 2.27',
        buildId: 'Nice2AutoMerge_IntegrationReleases227toReleases227',
      },
      {
        label: '2.27 ➞ int/2.28',
        buildId: 'Nice2AutoMerge_Releases227toIntegrationReleases228',
      },
      {
        label: 'int/2.28 ➞ 2.28',
        buildId: 'Nice2AutoMerge_IntegrationReleases228toReleases228',
      },
      {
        label: '2.28 ➞ int/2.29',
        buildId: 'Nice2AutoMerge_Releases228toIntegrationReleases229',
      },
      {
        label: 'int/2.29 ➞ 2.29',
        buildId: 'Nice2AutoMerge_IntegrationReleases229toReleases229',
      },
      {
        label: '2.29 ➞ int/master',
        buildId: 'Nice2AutoMerge_Releases229toIntegrationMaster',
      },
      {
        label: 'int/master ➞ master',
        buildId: 'Nice2AutoMerge_IntegrationMasterToMaster',
      },
    ],
  },
  {
    groupTitle: 'Test Deployments',
    priority: 40,
    columnClass: 'col-md-6',
    type: 'teamcity',
    typeAdapterArgs: {
      hideSuccess: true,
    },
    children: [
      {
        label: 'master.tocco.ch',
        buildId: 'ContinuousDeliveryNg_Test_Master',
      },
      {
        label: 'test229.tocco.ch',
        buildId: 'ContinuousDeliveryNg_Test_Test229',
      },
      {
        label: 'test228.tocco.ch',
        buildId: 'ContinuousDeliveryNg_Test_Test228',
      },
      {
        label: 'test227.tocco.ch',
        buildId: 'ContinuousDeliveryNg_Test_Test227',
      },
      {
        label: 'test226.tocco.ch',
        buildId: 'ContinuousDeliveryNg_Test_Test226',
      },
      {
        label: 'test225.tocco.ch',
        buildId: 'ContinuousDeliveryNg_Test_Test225',
      },
      {
        label: 'test224.tocco.ch',
        buildId: 'ContinuousDeliveryNg_Test_Test224',
      },
      {
        label: 'test223.tocco.ch',
        buildId: 'ContinuousDeliveryNg_Test_Test223',
      }
    ],
  },
];
