/*global define*/
define(['beautify-html'], function (beautify) {
    'use strict';

    function HtmlSources(sources) {
        this.sources = this.sanitize(sources);
    }
    HtmlSources.prototype = {};
    HtmlSources.prototype.constructor = HtmlSources;
    HtmlSources.prototype.sanitize = function (sources) {
        return beautify.html_beautify(sources || '')
            // Add protocol:
            .replace(/(url\(['"]|href=['"]|src=['"])(\/\/)/g, '$1https:$2')
            // Convert to absolute URLs:
            .replace(/(url\(['"]|href=['"]|src=['"])(\/static)/g, '$1https://docs.google.com$2');
    }

    return HtmlSources;
});
