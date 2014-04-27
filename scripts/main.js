require(
    {
        paths: {
            jquery: [
                'http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min',
                'http://cdnjs.cloudflare.com/ajax/libs/jquery/1.10.1/jquery.min',
            ],
            bootstrap: [
                'http://netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min',
                'http://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.3/js/bootstrap.min',
            ],
            angular: [
                'http://code.angularjs.org/1.2.4/angular.min',
                'http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.4/angular.min',
            ],
            angular_route: [
                'http://code.angularjs.org/1.2.4/angular-route.min',
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
            'app': {
                deps: [
                    'angular',
                    'angular_route',
                ]
            },
            'controllers/primary': {
                deps: [
                    'app'
                ]
            },
            'routes': {
                deps: [
                    'app',
                    'controllers/primary'
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
