angular.module('GithubInterface')
  .config(['$routeProvider', function($routeProvider) {

  $routeProvider
    .when(
      '/', {
        controller: 'ctrl.Primary',
        templateUrl:'views/home.html'
      }
    )
    .otherwise({redirectTo:'/'});
  }]);
