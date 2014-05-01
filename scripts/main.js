require(
    {
        paths: {
            jquery: [
                'http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min',
            ],
            bootstrap: [
                'http://netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min',
            ],
            angular: [
                'http://code.angularjs.org/1.2.4/angular.min',
            ],
            angular_route: [
                'http://code.angularjs.org/1.2.4/angular-route.min',
            ],
            angular_resource: [
                'http://code.angularjs.org/1.2.4/angular-resource.min',
            ]
        },
        shim: {
            'bootstrap': {
                deps: ['jquery']
            },
            'angular': {
                deps: ['bootstrap']
            },
            'angular_route':
            {
                deps: ['angular']
            },
            'angular_resource':
            {
                deps: ['angular']
            },
            'app': {
                deps: [
                    'angular',
                    'angular_route',
                    'angular_resource',
                ]
            },

            'resources/GithubAPI': {
                deps: ['app']
            },
            'resources/GithubStreak': {
                deps: ['app']
            },
            'services/SearchService': {
                deps: ['app']
            },
            'controllers/primary': {
                deps: ['app', 'services/SearchService']
            },
            'controllers/user': {
                deps: ['app', 'resources/GithubAPI', 'resources/GithubStreak', 'services/SearchService']
            },
            'routes': {
                deps: [
                    'app',
                    'controllers/primary',
                    'controllers/user'
                ]
            },

            'bootstrap_app': {
                deps: [
                    'jquery',
                    'bootstrap',
                    'angular',
                    'angular_route',
                    'app',
                    'routes'
                ]
            }
        }
    },
    ['require'],

    function(require) {
        console.log('calling app.js');
        require(['bootstrap_app']);
    }
);
