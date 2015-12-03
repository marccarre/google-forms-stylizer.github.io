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

    return self;
});
