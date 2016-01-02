/*global define, console*/
define(function () {
    'use strict';

    var self = {};
    self.isValidUrl = function (url) {
        return /https?:\/\/docs.google.[a-z]{2,6}\/forms\/d\/[a-zA-Z0-9\-_]+\/viewform/.test(url.trim());
    }
    return self;
});
