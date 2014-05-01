angular.module('GithubInterface').factory(

    //Name
    'GithubStreak',

    //Dependencies
    [ '$resource',

      //Definition
      function($resource) {

          var github = $resource(
              'https://github.com/users/:user/contributions_calendar_data',
              {
                  'query': 'users',
                  'user': '@id',
                  'callback': 'JSON_CALLBACK',
                  'per_page': 100
              },
              {
                  'get': {
                      'method': 'JSONP'
                  }
              }
          );
          return github;
      }
    ]
);
