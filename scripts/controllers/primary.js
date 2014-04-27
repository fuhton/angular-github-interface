angular.module('GithubInterface').controller(

    // controller name
    'ctrl.Primary',

    // dependency injection
    ['$scope', '$location', 'SearchService',
     function( $scope, $location, SearchService )  {

         SearchService.search();

         $scope.greeting = "hello";
     }
    ]

);
