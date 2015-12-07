/*global require, console*/
require.config({
    paths: {
        'jquery':        'https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min',
        'bootstrap':     'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min',
        'beautify':      'lib/beautify-v1.5.10/beautify',
        'beautify-css':  'lib/beautify-v1.5.10/beautify-css',
        'beautify-html': 'lib/beautify-v1.5.10/beautify-html',
        'model':         'app/model',
        'view':          'app/view',
        'controller':    'app/controller',
        'utilities':     'app/utilities'
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
require(['controller']);
