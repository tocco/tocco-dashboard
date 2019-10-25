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
        label: '2.22 - existing',
        buildId:
          'Nice2DatabaseRefactoring_Nice2dbRefactoringExistingDatabase222',
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
        label: '2.22 ➞ int/master',
        buildId: 'Nice2AutoMerge_Releases222toIntegrationMaster',
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
        label: 'test222.tocco.ch',
        buildId: 'ContinuousDeliveryNg_Test_Test222',
      },
      {
        label: 'test221.tocco.ch',
        buildId: 'ContinuousDeliveryNg_Test_Test221',
      },
      {
        label: 'test220.tocco.ch',
        buildId: 'ContinuousDeliveryNg_Test_Test220',
      },
      {
        label: 'test219.tocco.ch',
        buildId: 'ContinuousDeliveryNg_Test_Test219',
      },
      {
        label: 'test218.tocco.ch',
        buildId: 'ContinuousDeliveryNg_Test_Test218',
      },
      {
        label: 'test217.tocco.ch',
        buildId: 'ContinuousDeliveryNg_Test_Test217',
      },
      {
        label: 'test216.tocco.ch',
        buildId: 'ContinuousDeliveryNg_Test_Test216',
      },
      {
        label: 'test215.tocco.ch',
        buildId: 'ContinuousDeliveryNg_Test_Test215',
      },
      {
        label: 'test214.tocco.ch',
        buildId: 'ContinuousDeliveryNg_Test_Test214',
      },
      {
        label: 'test213.tocco.ch',
        buildId: 'ContinuousDeliveryNg_Test_Test213',
      },
      {
        label: 'test212.tocco.ch',
        buildId: 'ContinuousDeliveryNg_Test_Test212',
      },
    ],
  },
];
