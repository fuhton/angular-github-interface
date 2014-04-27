var app = angular.module('GithubInterface', [])
    .controller('WelcomeController', function($scope) {
        $scope.greeting = 'Welcome!';
    });
angular.bootstrap(document, ['GithubInterface']);
