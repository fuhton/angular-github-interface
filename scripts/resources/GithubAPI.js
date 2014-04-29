angular.module('GithubInterface').factory(

    //Name
    'GithubAPI',

    //Dependencies
    [ '$resource',

      //Definition
      function($resource) {

          var github = $resource(
              'https://api.github.com/:query/:user/:repo/:spec',
              {
                  'query': 'users',
                  'user': '@id',
                  'repo': 'repos',
                  'spec': '',
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
