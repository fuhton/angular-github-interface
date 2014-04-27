angular.module('GithubInterface').service(

    // service name
    'SearchService',

    // dependency injection
    [ '$rootScope',

      // service definition
      function(rootScope) {
          var _search = function() {
              rootScope.gsearch = function () {
                  console.log( rootScope.searchInput );
              }
          };

          return {
              search: function() {
                  _search();
              }
          }
      }]);
