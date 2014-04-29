angular.module('GithubInterface').controller(

    // Name
    'ctrl.GithubUser',

    // Dependencies
    ['$scope', '$location', 'GithubAPI', 'SearchService',
     function( $scope, $location, GithubAPI, SearchService )  {

         SearchService.search();

         GithubAPI.get({user: "fuhton"}, function (result) {
             $scope.greeting = result;
         });
     }
    ]

);
