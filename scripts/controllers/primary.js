angular.module('GithubInterface').controller(

    // controller name
    'ctrl.Primary',

    // dependency injection
    ['$scope' , '$location',
     function( $scope )  {

         $scope.greeting = "hello";
     }
    ]

);
