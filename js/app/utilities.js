/*global define, console*/
define(function () {
    'use strict';

    var self = {};
    self.isValidUrl = function (url) {
        //return /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(url);
        return /https?:\/\/docs.google.[a-z]{2,6}\/forms\/d\/[a-zA-Z0-9\-]+\/viewform/.test(url.trim());
    }
    return self;
});
