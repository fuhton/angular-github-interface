angular.module('GithubInterface').controller(

    // Name
    'ctrl.GithubUser',

    // Dependencies
    ['$scope', '$http', '$routeParams', '$location', 'GithubAPI', 'SearchService',
     function( $scope, $http, $routeParams, $location, GithubAPI, SearchService )  {

         var user = $routeParams.user;

         SearchService.search();

         GithubAPI.get(
             {user: user, repo: ''},
             function (result) {
                 $scope.user = result;
             }
         );

         GithubAPI.get(
             {user: user},
             function (result) {
                 $scope.repos = result;
             }

         );

     }
    ]
);
