/*global define, console*/
// The 'bootstrap' module does not return any object: place it last and omit it in the arguments:
define(['jquery', 'bootstrap'], function ($) {
    'use strict';

    var self = {};
    self.JQUERY_VERSION = $.fn.jquery;
    self.BOOTSTRAP_VERSION = $.fn.collapse.Constructor.VERSION;

    $(function () {
        console.log('Loaded: UI with jQuery v' + self.JQUERY_VERSION + ' and Bootstrap v' + self.BOOTSTRAP_VERSION + '.');
    });

    return self;
});
