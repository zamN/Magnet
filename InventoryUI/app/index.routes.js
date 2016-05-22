export function routerConfig ($stateProvider, $urlRouterProvider) {
  // 'ngInject';
  $stateProvider
    .state('homepage', {
      url: '/',
      templateUrl: 'app/views/homepage/homepage.html',
      controller: 'HomepageController',
      controllerAs: 'vm'
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'app/views/profile/profile.html',
      controller: 'ProfileController',
      controllerAs: 'vm'
    })

  $urlRouterProvider.otherwise('/');
}
