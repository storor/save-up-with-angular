export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('saves', {
      url: '/saves',
      templateUrl: 'app/components/saves/saves.html',
      controller: 'SavesController',
      controllerAs: 'controller'
    });

  $urlRouterProvider.otherwise('/saves');
}
