angular.module('GithubInterface').controller(

    //Name
    'ctrl.Primary',

    //Dependencies
    ['$scope', '$location', 'SearchService',
     function( $scope, $location, SearchService )  {

         SearchService.search();

         $scope.greeting = "hey buddy";
     }
    ]

);
