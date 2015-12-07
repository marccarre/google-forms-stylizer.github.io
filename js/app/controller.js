/*global define, console*/
// The 'bootstrap' module does not return any object: place it last and omit it in the arguments:
define(['jquery', 'model', 'view', 'utilities', 'bootstrap'], function ($, HtmlSources, view, utils) {
    'use strict';

    var self = {};
    self.JQUERY_VERSION = $.fn.jquery;
    self.BOOTSTRAP_VERSION = $.fn.collapse.Constructor.VERSION;

    $(function () {
        console.log('Loaded: UI with jQuery v' + self.JQUERY_VERSION + ' and Bootstrap v' + self.BOOTSTRAP_VERSION + '.');

        $('#input-google-form-url').on('change keyup paste', function() {
            view.clear();
            var url = $(this).val().trim();
            if (utils.isValidUrl(url)) {
                console.log('Loading and rendering: ' + url);
                // Render the original form in an iframe, in order to have CSS and JS working:
                $('#original-output').attr('src', url);

                // Leverage JSONP proxy for cross-origin request (WARNING: potentially insecure):
                $.getJSON('http://norigin.herokuapp.com?url=' + url + '&callback=?')
                    .done(function(data, textStatus, jqXHR) {
                        console.log('Loading and formatting sources for: ' + url);
                        view.render(new HtmlSources(data));
                    })
                    .fail(function(jqXHR, textStatus, errorThrown) {
                        view.renderError(textStatus, errorThrown, jqXHR);
                    });
            } else if (url) {
                view.renderError('Invalid URL: ' + url);    
            }
        });
    });

    return self;
});
