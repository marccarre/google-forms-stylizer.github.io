/*global define*/
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
    }

    self.render = function (htmlSources) {
        $('#original-sources').text(htmlSources.sources);
        $('#raw-output').html(htmlSources.rawHtml);
        $('#raw-sources').text(htmlSources.rawHtml);
        $('#bootstrap-output').html(htmlSources.bootstrap3Html);
        $('#bootstrap-sources').text(htmlSources.bootstrap3Html);
    }

    return self;
});
