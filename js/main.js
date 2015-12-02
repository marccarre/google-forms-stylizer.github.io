/*global require, console*/
require.config({
    paths: {
        'jquery':    'https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min',
        'bootstrap': 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min',
        'ui':        'app/ui'
    },
    shim: {
        'bootstrap': { 
            // Ensure jQuery is loaded before Bootstrap:
            deps: ['jquery']
        }
    }
});

console.log('Loaded: main.js');
// Call the application's main module:
require(['ui']);
