angular.module('GithubInterface')
    .config(['$routeProvider', function($routeProvider) {

        $routeProvider
            .when(
                '/', {
                    controller: 'ctrl.Primary',
                    templateUrl:'views/home.html'
                }
            )
            .when(
                '/:user', {
                    controller: 'ctrl.GithubUser',
                    templateUrl:'views/user.html'
                }
            )
            .otherwise({redirectTo:'/'});
    }]);
