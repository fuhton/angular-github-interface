angular.module('GithubInterface').controller(

    // Name
    'ctrl.GithubUser',

    // Dependencies
    ['$scope', '$routeParams', '$location', 'GithubAPI', 'GithubStreak', 'SearchService',
     function( $scope, $routeParams, $location, GithubAPI, GithubStreak, SearchService )  {

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

         GithubStreak.get(
             {user: user},
             function (result) {
                 $scope.streak = result;
             }
         );
     }
    ]
);
