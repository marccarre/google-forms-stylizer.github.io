/*global define, console*/
define(['jquery'], function ($) {
    'use strict';

    var self = {};

    self.JQUERY_VERSION = $.fn.jquery;

    self.clear = function () {
        $('#original-output').attr('src', '');
        $('#original-sources').empty();
        $('#raw-output').empty();
        $('#raw-sources').empty();
        $('#bootstrap-output').empty();
        $('#bootstrap-sources').empty();
        $('#error-message').empty();
        $('#error-message').css('display', 'none');
    }

    self.render = function (htmlSources) {
        $('#original-sources').text(htmlSources.sources);
        $('#raw-output').html(htmlSources.rawHtml);
        $('#raw-sources').text(htmlSources.rawHtml);
        $('#bootstrap-output').html(htmlSources.bootstrap3Html);
        $('#bootstrap-sources').text(htmlSources.bootstrap3Html);
    }

    self.renderError = function (jqXHR, textStatus, errorThrown) {
        self.clear();
        var message = 'Error: ' + JSON.stringify(textStatus) + ' - Root cause: ' + JSON.stringify(errorThrown) + ' - jqXHR: ' + JSON.stringify(jqXHR);
        $('#error-message').text(message);
        $('#error-message').css('display', 'block');
        console.log(message);
    }

    return self;
});
