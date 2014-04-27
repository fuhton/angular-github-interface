angular.module('GithubInterface').controller(

    // controller name
    'ctrl.GithubUser',

    // dependency injection
    ['$scope' , '$location', 'SearchService',
     function( $scope, $location, SearchService )  {

         SearchService.search();

         $scope.greeting = "user";
     }
    ]

);
