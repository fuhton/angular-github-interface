require(
    {
        'js/app': {
            dep: [],
        }
    },
    ['require'],

    function(require) {
        console.log('calling app.js');
        require(['js/app']);
    }
);
