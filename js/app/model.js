/*global define*/
define(['beautify-html', 'jquery'], function (beautify, $) {
    'use strict';

    function HtmlSources(sources) {
        this.sources        = this.sanitize(sources);
        this.rawHtml        = this.extractRawHtml(this.sources);
        this.bootstrap3Html = this.extractBootstrap3Html(this.sources);
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

    HtmlSources.prototype.extractRawHtml = function (sources) {
        var form = $(sources).find('form').empty().removeAttr('id').removeAttr('target').removeAttr('onsubmit'),
            labelId = '',
            helpId = '';

        $(sources).find('label[for^="entry_"], input[type="text"], textarea, ul[class="ss-choices"], select').each(function(i, element) {
            if ($(element).is('label')) {
                var label = $(element).clone().empty().removeAttr('class');
                // Add label ID for aria-labelledby, later on:
                var formId = label.attr('for');
                labelId = 'label-for-' + formId;
                label.attr('id', labelId);
                // Add title:
                $(label).append('<span class="form-title">' + $(element).find('div.ss-q-title').clone().children().remove().end().text().trim() + '</span>');
                // Add asterisk if required field:
                if ($(element).find('span.ss-required-asterisk').length) {
                    $(label).append('<span class="form-required" aria-hidden="true">*</span>');
                }
                form.append(label);
                // Add help / description text:
                helpId = 'help-for-' + formId;
                form.append('<div id="' + helpId + '" class="form-help">' + $(element).find('div.ss-q-help').text().trim() + '</div>');
                
            } else if ($(element).is('input') || $(element).is('textarea') || $(element).is('select')) {
                var formElement = $(element).removeAttr('class').removeAttr('dir').removeAttr('title').removeAttr('value');
                // Set aria-labelledby and aria-describedby:
                if (labelId) { formElement.attr('aria-labelledby', labelId); }
                if (helpId)  { formElement.attr('aria-describedby', helpId); }
                // Add form element:
                form.append(formElement);
                form.append('<br />');
                // Clean-up temporary variables:
                labelId = '';
                helpId = '';
                
            } else if ($(element).is('ul')) {
                var ul = $(element).clone().empty().removeAttr('class');
                // Set aria-labelledby and aria-describedby:
                if (labelId) { ul.attr('aria-labelledby', labelId); }
                if (helpId)  { ul.attr('aria-describedby', helpId); }
                // Add radio buttons or checkboxes:
                $(element).find('li').each(function () {
                    var li = $('<li>');
                    var label = $('<label>');
                    label.append($(this).find('input[type="radio"], input[type="checkbox"]').removeAttr('class'));
                    label.append($(this).find('span[class="ss-choice-label"]').removeAttr('class').attr('class', 'choice-label'));
                    li.append(label);
                    ul.append(li);
                });
                form.append(ul);
                form.append('<br />');
                // Clean-up temporary variables:
                labelId = '';
                helpId = '';
            }
        });

        $(sources).find('input[type="hidden"], input[type="submit"]').each(function(i, element) {
            form.append($(element).removeAttr('id').removeAttr('class'));
        });

        // outerHTML property may not be supported by all browsers, so we use this jQuery trick:
        var outerHtml = form.wrapAll('<div>').parent().html(); 
        return beautify.html_beautify(outerHtml);
    }

    HtmlSources.prototype.extractBootstrap3Html = function (sources) {
        var form = $(sources).find('form').empty().removeAttr('id').removeAttr('target').removeAttr('onsubmit'),
            formGroup = undefined,
            labelId = '',
            helpId = '';

        $(sources).find('label[for^="entry_"], input[type="text"], textarea, ul[class="ss-choices"], select').each(function(i, element) {
            if ($(element).is('label')) {
                // Create form group element:
                formGroup = $('<div class="form-group">');
                form.append(formGroup);

                var label = $(element).clone().empty().removeAttr('class');
                // Add label ID for aria-labelledby, later on:
                var formId = label.attr('for');
                labelId = 'label-for-' + formId;
                label.attr('id', labelId);
                // Add title:
                $(label).append('<span class="form-title">' + $(element).find('div.ss-q-title').clone().children().remove().end().text().trim() + '</span>');
                // Add asterisk if required field:
                if ($(element).find('span.ss-required-asterisk').length) {
                    $(label).append('<span class="form-required" aria-hidden="true">*</span>');
                }
                formGroup.append(label);
                // Add help / description text:
                helpId = 'help-for-' + formId;
                formGroup.append('<div id="' + helpId + '" class="help-block">' + $(element).find('div.ss-q-help').text().trim() + '</div>');

            } else if ($(element).is('input') || $(element).is('textarea') || $(element).is('select')) {
                var formElement = $(element).removeAttr('class').removeAttr('dir').removeAttr('title').removeAttr('value').attr('class', 'form-control');
                // Set aria-labelledby and aria-describedby:
                if (labelId) { formElement.attr('aria-labelledby', labelId); }
                if (helpId)  { formElement.attr('aria-describedby', helpId); }
                // Add form element:
                formGroup.append(formElement);
                // Clean-up temporary variables:
                labelId = '';
                helpId = '';
                
            } else if ($(element).is('ul')) {
                // Set aria-labelledby and aria-describedby:
                if (labelId) { formGroup.attr('aria-labelledby', labelId); }
                if (helpId)  { formGroup.attr('aria-describedby', helpId); }
                // Add role attribute:
                formGroup.attr('role', $(element).attr('role').trim());
                // Add radio buttons or checkboxes:
                $(element).find('li').each(function () {
                    var divChoice = $('<div class="' + $(this).find('input').attr('role').trim() + '">');
                    var label = $('<label>');
                    label.append($(this).find('input[type="radio"], input[type="checkbox"]').removeAttr('class'));
                    label.append($(this).find('span[class="ss-choice-label"]').removeAttr('class').attr('class', 'choice-label'));
                    divChoice.append(label);
                    formGroup.append(divChoice);
                });
                // Clean-up temporary variables:
                labelId = '';
                helpId = '';
            }
        });

        $(sources).find('input[type="hidden"]').each(function(i, element) {
            form.append($(element).removeAttr('id').removeAttr('class'));
        });
        $(sources).find('input[type="submit"]').each(function(i, element) {
            // Create form group element:
            formGroup = $('<div class="form-group">');
            form.append(formGroup);
            formGroup.append($(element).removeAttr('id').removeAttr('class').attr('class', 'btn btn-default'));
        });

        // outerHTML property may not be supported by all browsers, so we use this jQuery trick:
        var outerHtml = form.wrapAll('<div>').parent().html(); 
        return beautify.html_beautify(outerHtml);
    }

    return HtmlSources;
});
