angular.module('GithubInterface').service(

    //Name
    'SearchService',

    // Dependencies
    [ '$rootScope', '$location',

      //Definition
      function(rootScope, $location) {
          var _search = function() {
              rootScope.gsearch = function () {
                  $location.path(rootScope.searchInput);
                  rootScope.searchInput = "";
              }
          };

          return {
              search: function() {
                  _search();
              }
          }
      }
    ]
);
