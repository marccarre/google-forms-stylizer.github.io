/*global define, describe, it, expect*/
define(['model'], function (HtmlSources) {
    'use strict';

    describe('The Model module', function () {
        describe('The constructor', function () {
            it('should indent the provided page', function () {
                expect(originalHtmlSources).toContain('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"><html><head>');
                expect(originalHtmlSources.length).toEqual(39188);
                var htmlSources = new HtmlSources(originalHtmlSources);
                expect(htmlSources.sources).toContain('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">\n<html>\n\n<head>');
                expect(htmlSources.sources.length).toEqual(69720);
            });

            it('should add protocols to all URLs', function () {
                expect(originalHtmlSources.match(/(url\(['"]|href=['"]|src=['"])(\/\/)/g).length).toEqual(4);
                expect(originalHtmlSources.match(/(url\(['"]|href=['"]|src=['"])(https:\/\/)/g).length).toEqual(4);
                var htmlSources = new HtmlSources(originalHtmlSources);
                expect(htmlSources.sources.match(/(url\(['"]|href=['"]|src=['"])(\/\/)/g)).toBeNull();
                expect(htmlSources.sources.match(/(url\(['"]|href=['"]|src=['"])(https:\/\/)/g).length).toEqual(11);
            });

            it('should make all "/static" relative URLs absolute', function () {
                expect(originalHtmlSources.match(/(url\(['"]|href=['"]|src=['"])(\/static)/g).length).toEqual(3);
                expect(originalHtmlSources.match(/(url\(['"]|href=['"]|src=['"])(https:\/\/docs.google.com\/static)/g)).toBeNull();
                var htmlSources = new HtmlSources(originalHtmlSources);
                expect(htmlSources.sources.match(/(url\(['"]|href=['"]|src=['"])(\/static)/g)).toBeNull();
                expect(htmlSources.sources.match(/(url\(['"]|href=['"]|src=['"])(https:\/\/docs.google.com\/static)/g).length).toEqual(3);
            });
        });

        var originalHtmlSources = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"><html><head>' +
        '<link rel="shortcut icon" href="https://ssl.gstatic.com/docs/spreadsheets/forms/favicon_qp2.png" type="image/x-icon">' +
        '<meta http-equiv="Content-type" content="text/html; charset=utf-8">' +
        '<meta http-equiv="X-UA-Compatible" content="IE=10; chrome=1;">' +
        '<meta name="fragment" content="!">' +
        '<meta name="viewport" content="width=device-width">' +
        '<base target="_blank">' +
        '<title>Test Form</title>' +
        '<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Roboto:400,700">' +
        '' +
        '<link href=\'/static/forms/client/css/2131000577-formview_st_ltr.css\' type=\'text/css\' rel=\'stylesheet\'>' +
        '<style type="text/css">' +
        'body {' +
        '  background-color: rgb(231,238,247);' +
        '  background-image: url(\'//ssl.gstatic.com/docs/forms/themes/images/v1/0AX42CRMsmRFbUy03NTAzM2Q4My03ODU1LTQ2NzItODI2YS1kZmU5YzdiMzZjOGQ/blue-stripe-bg.png\');' +
        '  background-repeat: repeat;' +
        '  background-position: left top;' +
        '}' +
        '' +
        '.ss-form-container, .ss-resp-card {' +
        '  background-color: rgb(255,255,255);' +
        '}' +
        '' +
        '.ss-footer, .ss-response-footer {' +
        '  background-color: rgb(255,255,255);' +
        '}' +
        '' +
        '.ss-grid-row-odd {' +
        '  background-color: rgb(242,242,242);' +
        '}' +
        '' +
        '.ss-form-container, .ss-resp-card {' +
        '  border-color: rgb(212,212,212);' +
        '}' +
        '' +
        '.ss-form-title {' +
        '  text-align: left;' +
        '}' +
        '' +
        '.ss-form-title[dir="rtl"] {' +
        '  text-align: right;' +
        '}' +
        '' +
        '.ss-form-desc {' +
        '  text-align: left;' +
        '}' +
        '' +
        '.ss-form-desc[dir="rtl"] {' +
        '  text-align: right;' +
        '}' +
        '' +
        '.ss-header-image-container {' +
        '  height: 0;' +
        '}' +
        '' +
        '.ss-item {' +
        '  font-size: 1.080rem;' +
        '}' +
        '' +
        '.ss-choices {' +
        '  font-size: 1.000rem;' +
        '}' +
        '' +
        'body {' +
        '  font-family: "Roboto";' +
        '  color: rgb(119,119,119);' +
        '  font-weight: 400;' +
        '  font-size: 1.080rem;' +
        '  font-style: normal;' +
        '}' +
        '' +
        '.ss-record-username-message {' +
        '  font-family: "Roboto";' +
        '  color: rgb(119,119,119);' +
        '  font-weight: 400;' +
        '  font-size: 1.080rem;' +
        '  font-style: normal;' +
        '}' +
        '' +
        '.ss-form-title {' +
        '  font-family: "Roboto";' +
        '  color: rgb(80,80,80);' +
        '  font-weight: 400;' +
        '  font-size: 2.460rem;' +
        '  font-style: normal;' +
        '}' +
        '' +
        '.ss-confirmation {' +
        '  font-family: "Roboto";' +
        '  color: rgb(80,80,80);' +
        '  font-weight: 400;' +
        '  font-size: 2.460rem;' +
        '  font-style: normal;' +
        '}' +
        '' +
        '.ss-page-title, .ss-section-title {' +
        '  font-family: "Roboto";' +
        '  color: rgb(80,80,80);' +
        '  font-weight: 400;' +
        '  font-size: 1.845rem;' +
        '  font-style: normal;' +
        '}' +
        '' +
        '.ss-form-desc, .ss-page-description, .ss-section-description {' +
        '  font-family: "Roboto";' +
        '  color: rgb(140,140,140);' +
        '  font-weight: 400;' +
        '  font-size: 1.080rem;' +
        '  font-style: normal;' +
        '}' +
        '' +
        '.ss-resp-content {' +
        '  font-family: "Roboto";' +
        '  color: rgb(119,119,119);' +
        '  font-weight: 400;' +
        '  font-size: 1.080rem;' +
        '  font-style: normal;' +
        '}' +
        '' +
        '.ss-q-title {' +
        '  font-family: "Roboto";' +
        '  color: rgb(80,80,80);' +
        '  font-weight: 700;' +
        '  font-size: 1.080rem;' +
        '  font-style: normal;' +
        '}' +
        '' +
        '.ss-embeddable-object-container .ss-q-title {' +
        '  font-family: "Roboto";' +
        '  color: rgb(80,80,80);' +
        '  font-weight: 700;' +
        '  font-size: 1.845rem;' +
        '  font-style: normal;' +
        '}' +
        '' +
        '.ss-q-help, .ss-q-time-hint {' +
        '  font-family: "Roboto";' +
        '  color: rgb(140,140,140);' +
        '  font-weight: 400;' +
        '  font-size: 1.000rem;' +
        '  font-style: normal;' +
        '}' +
        '' +
        '.ss-choice-label, .video-secondary-text, .ss-gridrow-leftlabel, .ss-gridnumber, .ss-scalenumber, .ss-leftlabel, .ss-rightlabel {' +
        '  font-family: "Roboto";' +
        '  color: rgb(80,80,80);' +
        '  font-weight: 400;' +
        '  font-size: 1.000rem;' +
        '  font-style: normal;' +
        '}' +
        '' +
        '.error-message, .required-message, .ss-required-asterisk {' +
        '  font-family: "Roboto";' +
        '  color: rgb(196,59,29);' +
        '  font-weight: 400;' +
        '  font-size: 1.000rem;' +
        '  font-style: normal;' +
        '}' +
        '' +
        '.ss-send-email-receipt {' +
        '  font-family: "Roboto";' +
        '  color: rgb(80,80,80);' +
        '  font-weight: 400;' +
        '  font-size: 1.000rem;' +
        '  font-style: normal;' +
        '}' +
        '' +
        '.ss-password-warning {' +
        '  font-family: "Arial";' +
        '  color: rgb(119,119,119);' +
        '  font-weight: 400;' +
        '  font-size: 1.000rem;' +
        '  font-style: italic;' +
        '}' +
        '' +
        '.disclaimer {' +
        '  font-family: "Arial";' +
        '  color: rgb(119,119,119);' +
        '  font-weight: 400;' +
        '  font-size: 0.850rem;' +
        '  font-style: normal;' +
        '}' +
        '' +
        '.ss-footer-content {' +
        '  font-family: "Arial";' +
        '  color: rgb(80,80,80);' +
        '  font-weight: 400;' +
        '  font-size: 1.000rem;' +
        '  font-style: normal;' +
        '}' +
        '' +
        '.progress-label {' +
        '  font-family: "Roboto";' +
        '  color: rgb(140,140,140);' +
        '  font-weight: 400;' +
        '  font-size: 1.000rem;' +
        '  font-style: normal;' +
        '}' +
        '' +
        'a:link {' +
        '  color: rgb(0,0,238);' +
        '}' +
        '' +
        'a:visited {' +
        '  color: rgb(85,26,139);' +
        '}' +
        '' +
        'a:active {' +
        '  color: rgb(252,0,0);' +
        '}' +
        '' +
        'input[type=\'text\'], input:not([type]), textarea {' +
        '  font-size: 1.000rem;' +
        '}' +
        '' +
        '.error, .required, .errorbox-bad {' +
        '  border-color: rgb(196,59,29);' +
        '}' +
        '' +
        '.jfk-progressBar-nonBlocking .progress-bar-thumb {' +
        '  background-color: rgb(140,140,140);' +
        '}' +
        '' +
        '.ss-logo-image {' +
        '  background-image: url(\'//ssl.gstatic.com/docs/forms/forms_logo_2_small_dark.png\');' +
        '  background-size: 108px 21px;' +
        '  width: 108px;' +
        '  height: 21px;' +
        '}' +
        '' +
        '@media screen and (-webkit-device-pixel-ratio: 2) {' +
        '.ss-logo-image {' +
        '  background-image: url(\'//ssl.gstatic.com/docs/forms/forms_logo_2_small_dark_2x.png\');' +
        '}' +
        '}' +
        '' +
        '</style>' +
        '' +
        '' +
        '<link href=\'/static/forms/client/css/3145455273-mobile_formview_st_ltr.css\' type=\'text/css\' rel=\'stylesheet\' media=\'screen and (max-device-width: 721px)\'>' +
        '' +
        '<script type="text/javascript">' +
        '          /**' +
        ' * @license' +
        ' *' +
        ' * H5F 1.1.1' +
        ' * See https://github.com/ryanseddon/H5F/ for details.' +
        ' *' +
        ' * Copyright (c) 2013 Ryan Seddon' +
        ' *' +
        ' * Permission is hereby granted, free of charge, to any person' +
        ' * obtaining a copy of this software and associated documentation' +
        ' * files (the "Software"), to deal in the Software without' +
        ' * restriction, including without limitation the rights to use,' +
        ' * copy, modify, merge, publish, distribute, sublicense, and/or sell' +
        ' * copies of the Software, and to permit persons to whom the' +
        ' * Software is furnished to do so, subject to the following' +
        ' * conditions:' +
        ' *' +
        ' * The above copyright notice and this permission notice shall be' +
        ' * included in all copies or substantial portions of the Software.' +
        ' *' +
        ' * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,' +
        ' * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES' +
        ' * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND' +
        ' * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT' +
        ' * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,' +
        ' * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING' +
        ' * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR' +
        ' * OTHER DEALINGS IN THE SOFTWARE.' +
        ' */' +
        '(function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof module&&module.exports?module.exports=t():e.H5F=t()})(this,function(){var e,t,a,i,n,r,l,s,o,u,d,c,v,p,f,m,b,h,g,y,w,C,N,A,E,$,x=document,k=x.createElement("input"),q=/^[a-zA-Z0-9.!#$%&\'*+-\/=?\^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,M=/[a-z][\-\.+a-z]*:\/\//i,L=/^(input|select|textarea)$/i;return r=function(e,t){var a=!e.nodeType||!1,i={validClass:"valid",invalidClass:"error",requiredClass:"required",placeholderClass:"placeholder",onSubmit:Function.prototype,onInvalid:Function.prototype};if("object"==typeof t)for(var r in i)t[r]===void 0&&(t[r]=i[r]);if(n=t||i,a)for(var s=0,o=e.length;o>s;s++)l(e[s]);else l(e)},l=function(a){var i,r=a.elements,l=r.length,c=!!a.attributes.novalidate;if(g(a,"invalid",o,!0),g(a,"blur",o,!0),g(a,"input",o,!0),g(a,"keyup",o,!0),g(a,"focus",o,!0),g(a,"change",o,!0),g(a,"click",u,!0),g(a,"submit",function(i){return e=!0,t||c||a.checkValidity()?(n.onSubmit.call(a,i),void 0):(w(i),void 0)},!1),!v())for(a.checkValidity=function(){return d(a)};l--;)i=!!r[l].attributes.required,"fieldset"!==r[l].nodeName.toLowerCase()&&s(r[l])},s=function(e){var t=e,a=h(t),n={type:t.getAttribute("type"),pattern:t.getAttribute("pattern"),placeholder:t.getAttribute("placeholder")},r=/^(email|url)$/i,l=/^(input|keyup)$/i,s=r.test(n.type)?n.type:n.pattern?n.pattern:!1,o=p(t,s),u=m(t,"step"),v=m(t,"min"),b=m(t,"max"),g=!(""===t.validationMessage||void 0===t.validationMessage);t.checkValidity=function(){return d.call(this,t)},t.setCustomValidity=function(e){c.call(t,e)},t.validity={valueMissing:a,patternMismatch:o,rangeUnderflow:v,rangeOverflow:b,stepMismatch:u,customError:g,valid:!(a||o||u||v||b||g)},n.placeholder&&!l.test(i)&&f(t)},o=function(e){var t=C(e)||e,a=/^(input|keyup|focusin|focus|change)$/i,r=/^(submit|image|button|reset)$/i,l=/^(checkbox|radio)$/i,u=!0;!L.test(t.nodeName)||r.test(t.type)||r.test(t.nodeName)||(i=e.type,v()||s(t),t.validity.valid&&(""!==t.value||l.test(t.type))||t.value!==t.getAttribute("placeholder")&&t.validity.valid?(A(t,[n.invalidClass,n.requiredClass]),N(t,n.validClass)):a.test(i)?t.validity.valueMissing&&A(t,[n.requiredClass,n.invalidClass,n.validClass]):t.validity.valueMissing?(A(t,[n.invalidClass,n.validClass]),N(t,n.requiredClass)):t.validity.valid||(A(t,[n.validClass,n.requiredClass]),N(t,n.invalidClass)),"input"===i&&u&&(y(t.form,"keyup",o,!0),u=!1))},d=function(t){var a,i,r,l,s,u=!1;if("form"===t.nodeName.toLowerCase()){a=t.elements;for(var d=0,c=a.length;c>d;d++)i=a[d],r=!!i.attributes.disabled,l=!!i.attributes.required,s=!!i.attributes.pattern,"fieldset"!==i.nodeName.toLowerCase()&&!r&&(l||s&&l)&&(o(i),i.validity.valid||u||(e&&i.focus(),u=!0,n.onInvalid.call(t,i)));return!u}return o(t),t.validity.valid},c=function(e){var t=this;t.validationMessage=e},u=function(e){var a=C(e);a.attributes.formnovalidate&&"submit"===a.type&&(t=!0)},v=function(){return E(k,"validity")&&E(k,"checkValidity")},p=function(e,t){if("email"===t)return!q.test(e.value);if("url"===t)return!M.test(e.value);if(t){var i=e.getAttribute("placeholder"),n=e.value;return a=RegExp("^(?:"+t+")$"),n===i?!1:""===n?!1:!a.test(e.value)}return!1},f=function(e){var t={placeholder:e.getAttribute("placeholder")},a=/^(focus|focusin|submit)$/i,r=/^(input|textarea)$/i,l=/^password$/i,s=!!("placeholder"in k);s||!r.test(e.nodeName)||l.test(e.type)||(""!==e.value||a.test(i)?e.value===t.placeholder&&a.test(i)&&(e.value="",A(e,n.placeholderClass)):(e.value=t.placeholder,g(e.form,"submit",function(){i="submit",f(e)},!0),N(e,n.placeholderClass)))},m=function(e,t){var a=parseInt(e.getAttribute("min"),10)||0,i=parseInt(e.getAttribute("max"),10)||!1,n=parseInt(e.getAttribute("step"),10)||1,r=parseInt(e.value,10),l=(r-a)%n;return h(e)||isNaN(r)?"number"===e.getAttribute("type")?!0:!1:"step"===t?e.getAttribute("step")?0!==l:!1:"min"===t?e.getAttribute("min")?a>r:!1:"max"===t?e.getAttribute("max")?r>i:!1:void 0},b=function(e){var t=!!e.attributes.required;return t?h(e):!1},h=function(e){var t=e.getAttribute("placeholder"),a=/^(checkbox|radio)$/i,i=!!e.attributes.required;return!(!i||""!==e.value&&e.value!==t&&(!a.test(e.type)||$(e)))},g=function(e,t,a,i){E(window,"addEventListener")?e.addEventListener(t,a,i):E(window,"attachEvent")&&window.event!==void 0&&("blur"===t?t="focusout":"focus"===t&&(t="focusin"),e.attachEvent("on"+t,a))},y=function(e,t,a,i){E(window,"removeEventListener")?e.removeEventListener(t,a,i):E(window,"detachEvent")&&window.event!==void 0&&e.detachEvent("on"+t,a)},w=function(e){e=e||window.event,e.stopPropagation&&e.preventDefault?(e.stopPropagation(),e.preventDefault()):(e.cancelBubble=!0,e.returnValue=!1)},C=function(e){return e=e||window.event,e.target||e.srcElement},N=function(e,t){var a;e.className?(a=RegExp("(^|\\s)"+t+"(\\s|$)"),a.test(e.className)||(e.className+=" "+t)):e.className=t},A=function(e,t){var a,i,n="object"==typeof t?t.length:1,r=n;if(e.className)if(e.className===t)e.className="";else for(;n--;)a=RegExp("(^|\\s)"+(r>1?t[n]:t)+"(\\s|$)"),i=e.className.match(a),i&&3===i.length&&(e.className=e.className.replace(a,i[1]&&i[2]?" ":""))},E=function(e,t){var a=typeof e[t],i=RegExp("^function|object$","i");return!!(i.test(a)&&e[t]||"unknown"===a)},$=function(e){for(var t=document.getElementsByName(e.name),a=0;t.length>a;a++)if(t[a].checked)return!0;return!1},{setup:r}});' +
        '' +
        '        </script>' +
        '<link rel="alternate" type="text/xml+oembed" href="https://docs.google.com/forms/d/1Z69tnhJNRl-8hFlTteWlzCVJHyNWz4Q9tTQAHlL5aEA/oembed?url=https://docs.google.com/forms/d/1Z69tnhJNRl-8hFlTteWlzCVJHyNWz4Q9tTQAHlL5aEA/viewform&amp;format=xml">' +
        '<meta property="og:title" content="Test Form"><meta property="og:type" content="article"><meta property="og:site_name" content="Google Docs"><meta property="og:url" content="https://docs.google.com/forms/d/1Z69tnhJNRl-8hFlTteWlzCVJHyNWz4Q9tTQAHlL5aEA/viewform?usp=embed_facebook"><meta property="og:image" content="https://lh6.googleusercontent.com/yPrd97Oodnr62V869Pgd9n8AvNVvTakYKa5eTw16E4xaIkPiYUbifK5KNf7LQTnOhkA=w1200-h630-p"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta name="twitter:card" content="player"><meta name="twitter:title" content="Test Form"><meta name="twitter:url" content="https://docs.google.com/forms/d/1Z69tnhJNRl-8hFlTteWlzCVJHyNWz4Q9tTQAHlL5aEA/viewform?usp=embed_twitter"><meta name="twitter:image" content="https://lh6.googleusercontent.com/yPrd97Oodnr62V869Pgd9n8AvNVvTakYKa5eTw16E4xaIkPiYUbifK5KNf7LQTnOhkA=w435-h251-p-b1-c0x00999999"><meta name="twitter:player:width" content="435"><meta name="twitter:player:height" content="251"><meta name="twitter:player" content="https://docs.google.com/forms/d/1Z69tnhJNRl-8hFlTteWlzCVJHyNWz4Q9tTQAHlL5aEA/viewform?embedded=true&amp;usp=embed_twitter"><meta name="twitter:description" content="Google Drive"><meta name="twitter:site" content="@googledocs">' +
        '</head>' +
        '<body dir="ltr" class="ss-base-body"><div itemscope itemtype="http://schema.org/CreativeWork/FormObject"><meta itemprop="name" content="Test Form">' +
        '' +
        '' +
        '<meta itemprop="url" content="https://docs.google.com/forms/d/1Z69tnhJNRl-8hFlTteWlzCVJHyNWz4Q9tTQAHlL5aEA/viewform">' +
        '<meta itemprop="embedUrl" content="https://docs.google.com/forms/d/1Z69tnhJNRl-8hFlTteWlzCVJHyNWz4Q9tTQAHlL5aEA/viewform?embedded=true">' +
        '<meta itemprop="faviconUrl" content="https://ssl.gstatic.com/docs/spreadsheets/forms/favicon_qp2.png">' +
        '' +
        '' +
        '' +
        '' +
        '<div class="ss-form-container"><div class="ss-header-image-container"><div class="ss-header-image-image"><div class="ss-header-image-sizer"></div></div></div>' +
        '<div class="ss-top-of-page"><div class="ss-form-heading"><h1 class="ss-form-title" dir="ltr">Test Form</h1>' +
        '' +
        '' +
        '<div class="ss-required-asterisk" aria-hidden="true">* Required</div></div></div>' +
        '<div class="ss-form"><form action="https://docs.google.com/forms/d/1Z69tnhJNRl-8hFlTteWlzCVJHyNWz4Q9tTQAHlL5aEA/formResponse" method="POST" id="ss-form" target="_self" onsubmit=""><ol role="list" class="ss-question-list" style="padding-left: 0">' +
        '<div class="ss-form-question errorbox-good" role="listitem">' +
        '<div dir="auto" class="ss-item ss-item-required ss-text"><div class="ss-form-entry">' +
        '<label class="ss-q-item-label" for="entry_1244196359"><div class="ss-q-title">Enter text' +
        '<label for="itemView.getDomIdToLabel()" aria-label="(Required field)"></label>' +
        '<span class="ss-required-asterisk" aria-hidden="true">*</span></div>' +
        '<div class="ss-q-help ss-secondary-text" dir="auto">A short text...</div></label>' +
        '<input type="text" name="entry.1244196359" value="" class="ss-q-short" id="entry_1244196359" dir="auto" aria-label="Enter text A short text... " aria-required="true" required="" title="">' +
        '<div class="error-message" id="1141750391_errorMessage"></div>' +
        '<div class="required-message">This is a required question</div>' +
        '</div></div></div> <div class="ss-form-question errorbox-good" role="listitem">' +
        '<div dir="auto" class="ss-item  ss-paragraph-text"><div class="ss-form-entry">' +
        '<label class="ss-q-item-label" for="entry_251102827"><div class="ss-q-title">Enter comments' +
        '</div>' +
        '<div class="ss-q-help ss-secondary-text" dir="auto">A long paragraph...</div></label>' +
        '<textarea name="entry.251102827" rows="8" cols="0" class="ss-q-long" id="entry_251102827" dir="auto" aria-label="Enter comments A long paragraph... "></textarea>' +
        '<div class="error-message" id="1819944731_errorMessage"></div>' +
        '<div class="required-message">This is a required question</div>' +
        '</div></div></div> <div class="ss-form-question errorbox-good" role="listitem">' +
        '<div dir="auto" class="ss-item ss-item-required ss-radio"><div class="ss-form-entry">' +
        '<label class="ss-q-item-label" for="entry_1755094973"><div class="ss-q-title">Choose one' +
        '<label for="itemView.getDomIdToLabel()" aria-label="(Required field)"></label>' +
        '<span class="ss-required-asterisk" aria-hidden="true">*</span></div>' +
        '<div class="ss-q-help ss-secondary-text" dir="auto">You take the blue pill: the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill: you stay in Wonderland, and I show you how deep the rabbit hole goes. Remember: all I&#39;m offering is the truth. Nothing more.</div></label>' +
        '' +
        '<ul class="ss-choices" role="radiogroup" aria-label="Choose one You take the blue pill: the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill: you stay in Wonderland, and I show you how deep the rabbit hole goes. Remember: all I&#39;m offering is the truth. Nothing more. "><li class="ss-choice-item"><label><span class="ss-choice-item-control goog-inline-block"><input type="radio" name="entry.1189357388" value="Blue pill" id="group_1189357388_1" role="radio" class="ss-q-radio" aria-label="Blue pill" required="" aria-required="true"></span>' +
        '<span class="ss-choice-label">Blue pill</span>' +
        '</label></li> <li class="ss-choice-item"><label><span class="ss-choice-item-control goog-inline-block"><input type="radio" name="entry.1189357388" value="Red pill" id="group_1189357388_2" role="radio" class="ss-q-radio" aria-label="Red pill" required="" aria-required="true"></span>' +
        '<span class="ss-choice-label">Red pill</span>' +
        '</label></li></ul>' +
        '<div class="error-message" id="1755094973_errorMessage"></div>' +
        '<div class="required-message">This is a required question</div></div></div></div> <div class="ss-form-question errorbox-good" role="listitem">' +
        '<div dir="auto" class="ss-item  ss-checkbox"><div class="ss-form-entry">' +
        '<label class="ss-q-item-label" for="entry_96403401"><div class="ss-q-title">Select a few' +
        '</div>' +
        '<div class="ss-q-help ss-secondary-text" dir="auto">Multiple possible choices...</div></label>' +
        '' +
        '<ul class="ss-choices" role="group" aria-label="Select a few Multiple possible choices... "><li class="ss-choice-item"><label><span class="ss-choice-item-control goog-inline-block"><input type="checkbox" name="entry.673151654" value="C" id="group_673151654_1" role="checkbox" class="ss-q-checkbox"></span>' +
        '<span class="ss-choice-label">C</span>' +
        '</label></li> <li class="ss-choice-item"><label><span class="ss-choice-item-control goog-inline-block"><input type="checkbox" name="entry.673151654" value="C++" id="group_673151654_2" role="checkbox" class="ss-q-checkbox"></span>' +
        '<span class="ss-choice-label">C++</span>' +
        '</label></li> <li class="ss-choice-item"><label><span class="ss-choice-item-control goog-inline-block"><input type="checkbox" name="entry.673151654" value="Java" id="group_673151654_3" role="checkbox" class="ss-q-checkbox"></span>' +
        '<span class="ss-choice-label">Java</span>' +
        '</label></li> <li class="ss-choice-item"><label><span class="ss-choice-item-control goog-inline-block"><input type="checkbox" name="entry.673151654" value="Scala" id="group_673151654_4" role="checkbox" class="ss-q-checkbox"></span>' +
        '<span class="ss-choice-label">Scala</span>' +
        '</label></li> <li class="ss-choice-item"><label><span class="ss-choice-item-control goog-inline-block"><input type="checkbox" name="entry.673151654" value="Python" id="group_673151654_5" role="checkbox" class="ss-q-checkbox"></span>' +
        '<span class="ss-choice-label">Python</span>' +
        '</label></li> <li class="ss-choice-item"><label><span class="ss-choice-item-control goog-inline-block"><input type="checkbox" name="entry.673151654" value="Ruby" id="group_673151654_6" role="checkbox" class="ss-q-checkbox"></span>' +
        '<span class="ss-choice-label">Ruby</span>' +
        '</label></li> <li class="ss-choice-item"><label><span class="ss-choice-item-control goog-inline-block"><input type="checkbox" name="entry.673151654" value="Javascript" id="group_673151654_7" role="checkbox" class="ss-q-checkbox"></span>' +
        '<span class="ss-choice-label">Javascript</span>' +
        '</label></li></ul>' +
        '<div class="error-message" id="96403401_errorMessage"></div>' +
        '<div class="required-message">This is a required question</div></div></div></div> <div class="ss-form-question errorbox-good" role="listitem">' +
        '<div dir="auto" class="ss-item ss-item-required ss-select"><div class="ss-form-entry">' +
        '<label class="ss-q-item-label" for="entry_194574033"><div class="ss-q-title">Choose from a dropdown' +
        '<label for="itemView.getDomIdToLabel()" aria-label="(Required field)"></label>' +
        '<span class="ss-required-asterisk" aria-hidden="true">*</span></div>' +
        '<div class="ss-q-help ss-secondary-text" dir="auto">A list...</div></label>' +
        '<select name="entry.194574033" id="entry_194574033" aria-label="Choose from a dropdown A list... " aria-required="true" required=""><option value=""></option>' +
        '<option value="Linux">Linux</option> <option value="Mac OS X">Mac OS X</option> <option value="Windows">Windows</option> <option value="Minix">Minix</option></select>' +
        '<div class="required-message">This is a required question</div></div></div></div> <div class="ss-form-question errorbox-good" role="listitem">' +
        '<div dir="auto" class="ss-item  ss-scale"><div class="ss-form-entry">' +
        '<label class="ss-q-item-label" for="entry_670505934"><div class="ss-q-title">Grade this' +
        '</div>' +
        '<div class="ss-q-help ss-secondary-text" dir="auto">A scale...</div></label>' +
        '' +
        '<table border="0" cellpadding="5" cellspacing="0" id="entry_1311257853"><tr aria-hidden="true"><td class="ss-scalenumbers"></td>' +
        '<td class="ss-scalenumbers"><label class="ss-scalenumber" for="group_1311257853_1">1</label></td> <td class="ss-scalenumbers"><label class="ss-scalenumber" for="group_1311257853_2">2</label></td> <td class="ss-scalenumbers"><label class="ss-scalenumber" for="group_1311257853_3">3</label></td> <td class="ss-scalenumbers"><label class="ss-scalenumber" for="group_1311257853_4">4</label></td> <td class="ss-scalenumbers"><label class="ss-scalenumber" for="group_1311257853_5">5</label></td>' +
        '<td class="ss-scalenumbers"></td></tr>' +
        '<tr role="radiogroup" aria-label="Grade this A scale... Select a value from a range of 1,I just want to kill myself..., to 5,I am in heaven...,."><td class="ss-scalerow ss-leftlabel"><div aria-hidden="true" class="aria-todo">I just want to kill myself...</div></td>' +
        '<td class="ss-scalerow"><div class="ss-scalerow-fieldcell"><input type="radio" name="entry.1311257853" value="1" id="group_1311257853_1" role="radio" class="ss-q-radio" aria-label="1"></div></td> <td class="ss-scalerow"><div class="ss-scalerow-fieldcell"><input type="radio" name="entry.1311257853" value="2" id="group_1311257853_2" role="radio" class="ss-q-radio" aria-label="2"></div></td> <td class="ss-scalerow"><div class="ss-scalerow-fieldcell"><input type="radio" name="entry.1311257853" value="3" id="group_1311257853_3" role="radio" class="ss-q-radio" aria-label="3"></div></td> <td class="ss-scalerow"><div class="ss-scalerow-fieldcell"><input type="radio" name="entry.1311257853" value="4" id="group_1311257853_4" role="radio" class="ss-q-radio" aria-label="4"></div></td> <td class="ss-scalerow"><div class="ss-scalerow-fieldcell"><input type="radio" name="entry.1311257853" value="5" id="group_1311257853_5" role="radio" class="ss-q-radio" aria-label="5"></div></td>' +
        '<td class="ss-scalerow ss-rightlabel" aria-hidden="true">I am in heaven...</td></tr></table>' +
        '<div class="required-message">This is a required question</div></div></div></div> <div class="ss-form-question errorbox-good" role="listitem">' +
        '<div dir="auto" class="ss-item  ss-grid"><div class="ss-form-entry">' +
        '<label class="ss-q-item-label" for="entry_372289886"><div class="ss-q-title">Hmmm... a grid now...' +
        '</div>' +
        '<div class="ss-q-help ss-secondary-text" dir="auto">A grid, really.</div></label>' +
        '<div>' +
        '<table border="0" cellpadding="5" cellspacing="0"><thead><tr><td class="ss-gridnumbers ss-gridrow-leftlabel"></td>' +
        '<td class="ss-gridnumbers" style="width: 33%;"><label class="ss-gridnumber">Column 1</label></td> <td class="ss-gridnumbers" style="width: 33%;"><label class="ss-gridnumber">Column 2</label></td></tr></thead>' +
        '<tbody><tr role="radiogroup" aria-label="Row 1" aria-describedby="372289886_errorMessage" class="ss-gridrow ss-grid-row-odd"><td class="ss-gridrow ss-gridrow-leftlabel">Row 1</td>' +
        '<td class="ss-gridrow" style="width: 33%;"><label class="ss-grid-button-label"><div class="ss-grid-button-wrapper"><input type="radio" name="entry.1284552737" value="Column 1" id="group_1284552737_1" role="radio" class="ss-q-radio" aria-label="Column 1"></div></label></td> <td class="ss-gridrow" style="width: 33%;"><label class="ss-grid-button-label"><div class="ss-grid-button-wrapper"><input type="radio" name="entry.1284552737" value="Column 2" id="group_1284552737_2" role="radio" class="ss-q-radio" aria-label="Column 2"></div></label></td></tr> <tr role="radiogroup" aria-label="Row 2" aria-describedby="372289886_errorMessage" class="ss-gridrow ss-grid-row-even"><td class="ss-gridrow ss-gridrow-leftlabel">Row 2</td>' +
        '<td class="ss-gridrow" style="width: 33%;"><label class="ss-grid-button-label"><div class="ss-grid-button-wrapper"><input type="radio" name="entry.1872134541" value="Column 1" id="group_1872134541_1" role="radio" class="ss-q-radio" aria-label="Column 1"></div></label></td> <td class="ss-gridrow" style="width: 33%;"><label class="ss-grid-button-label"><div class="ss-grid-button-wrapper"><input type="radio" name="entry.1872134541" value="Column 2" id="group_1872134541_2" role="radio" class="ss-q-radio" aria-label="Column 2"></div></label></td></tr></tbody></table>' +
        '<div class="error-message" id="372289886_errorMessage"></div>' +
        '<div class="required-message">Please enter one response per row</div></div></div></div></div> <div class="ss-form-question errorbox-good" role="listitem">' +
        '<div dir="auto" class="ss-item  ss-date"><div class="ss-form-entry">' +
        '<label class="ss-q-item-label" for="entry_1138167882"><div class="ss-q-title">What day is it today?' +
        '</div>' +
        '<div class="ss-q-help ss-secondary-text" dir="auto">A date...</div></label>' +
        '<div class="ss-q-date" role="group" aria-label="What day is it today? A date... "><div class="ss-datetime-box goog-inline-block" role="group"> <select name="entry.1138167882_month" class="ss-month-dropdown" id="entry.1138167882_month" aria-label="Month"><option value="">Month</option>' +
        '<option value="1">January</option> <option value="2">February</option> <option value="3">March</option> <option value="4">April</option> <option value="5">May</option> <option value="6">June</option> <option value="7">July</option> <option value="8">August</option> <option value="9">September</option> <option value="10">October</option> <option value="11">November</option> <option value="12">December</option></select>   <select name="entry.1138167882_day" class="ss-day-dropdown" id="entry.1138167882_day" aria-label="Day of month"><option value="">Day</option>' +
        '<option value="1">1</option> <option value="2">2</option> <option value="3">3</option> <option value="4">4</option> <option value="5">5</option> <option value="6">6</option> <option value="7">7</option> <option value="8">8</option> <option value="9">9</option> <option value="10">10</option> <option value="11">11</option> <option value="12">12</option> <option value="13">13</option> <option value="14">14</option> <option value="15">15</option> <option value="16">16</option> <option value="17">17</option> <option value="18">18</option> <option value="19">19</option> <option value="20">20</option> <option value="21">21</option> <option value="22">22</option> <option value="23">23</option> <option value="24">24</option> <option value="25">25</option> <option value="26">26</option> <option value="27">27</option> <option value="28">28</option> <option value="29">29</option> <option value="30">30</option> <option value="31">31</option></select> ' +
        '<select name="entry.1138167882_year" id="entry.1138167882_year" aria-label="Year"><option value="">Year</option>' +
        '<option value="1892">1892</option> <option value="1893">1893</option> <option value="1894">1894</option> <option value="1895">1895</option> <option value="1896">1896</option> <option value="1897">1897</option> <option value="1898">1898</option> <option value="1899">1899</option> <option value="1900">1900</option> <option value="1901">1901</option> <option value="1902">1902</option> <option value="1903">1903</option> <option value="1904">1904</option> <option value="1905">1905</option> <option value="1906">1906</option> <option value="1907">1907</option> <option value="1908">1908</option> <option value="1909">1909</option> <option value="1910">1910</option> <option value="1911">1911</option> <option value="1912">1912</option> <option value="1913">1913</option> <option value="1914">1914</option> <option value="1915">1915</option> <option value="1916">1916</option> <option value="1917">1917</option> <option value="1918">1918</option> <option value="1919">1919</option> <option value="1920">1920</option> <option value="1921">1921</option> <option value="1922">1922</option> <option value="1923">1923</option> <option value="1924">1924</option> <option value="1925">1925</option> <option value="1926">1926</option> <option value="1927">1927</option> <option value="1928">1928</option> <option value="1929">1929</option> <option value="1930">1930</option> <option value="1931">1931</option> <option value="1932">1932</option> <option value="1933">1933</option> <option value="1934">1934</option> <option value="1935">1935</option> <option value="1936">1936</option> <option value="1937">1937</option> <option value="1938">1938</option> <option value="1939">1939</option> <option value="1940">1940</option> <option value="1941">1941</option> <option value="1942">1942</option> <option value="1943">1943</option> <option value="1944">1944</option> <option value="1945">1945</option> <option value="1946">1946</option> <option value="1947">1947</option> <option value="1948">1948</option> <option value="1949">1949</option> <option value="1950">1950</option> <option value="1951">1951</option> <option value="1952">1952</option> <option value="1953">1953</option> <option value="1954">1954</option> <option value="1955">1955</option> <option value="1956">1956</option> <option value="1957">1957</option> <option value="1958">1958</option> <option value="1959">1959</option> <option value="1960">1960</option> <option value="1961">1961</option> <option value="1962">1962</option> <option value="1963">1963</option> <option value="1964">1964</option> <option value="1965">1965</option> <option value="1966">1966</option> <option value="1967">1967</option> <option value="1968">1968</option> <option value="1969">1969</option> <option value="1970">1970</option> <option value="1971">1971</option> <option value="1972">1972</option> <option value="1973">1973</option> <option value="1974">1974</option> <option value="1975">1975</option> <option value="1976">1976</option> <option value="1977">1977</option> <option value="1978">1978</option> <option value="1979">1979</option> <option value="1980">1980</option> <option value="1981">1981</option> <option value="1982">1982</option> <option value="1983">1983</option> <option value="1984">1984</option> <option value="1985">1985</option> <option value="1986">1986</option> <option value="1987">1987</option> <option value="1988">1988</option> <option value="1989">1989</option> <option value="1990">1990</option> <option value="1991">1991</option> <option value="1992">1992</option> <option value="1993">1993</option> <option value="1994">1994</option> <option value="1995">1995</option> <option value="1996">1996</option> <option value="1997">1997</option> <option value="1998">1998</option> <option value="1999">1999</option> <option value="2000">2000</option> <option value="2001">2001</option> <option value="2002">2002</option> <option value="2003">2003</option> <option value="2004">2004</option> <option value="2005">2005</option> <option value="2006">2006</option> <option value="2007">2007</option> <option value="2008">2008</option> <option value="2009">2009</option> <option value="2010">2010</option> <option value="2011">2011</option> <option value="2012">2012</option> <option value="2013">2013</option> <option value="2014">2014</option> <option value="2015" selected>2015</option> <option value="2016">2016</option> <option value="2017">2017</option> <option value="2018">2018</option> <option value="2019">2019</option> <option value="2020">2020</option> <option value="2021">2021</option> <option value="2022">2022</option> <option value="2023">2023</option> <option value="2024">2024</option> <option value="2025">2025</option> <option value="2026">2026</option> <option value="2027">2027</option> <option value="2028">2028</option> <option value="2029">2029</option> <option value="2030">2030</option> <option value="2031">2031</option> <option value="2032">2032</option> <option value="2033">2033</option> <option value="2034">2034</option> <option value="2035">2035</option> <option value="2036">2036</option> <option value="2037">2037</option> <option value="2038">2038</option> <option value="2039">2039</option> <option value="2040">2040</option> <option value="2041">2041</option> <option value="2042">2042</option> <option value="2043">2043</option> <option value="2044">2044</option> <option value="2045">2045</option> <option value="2046">2046</option> <option value="2047">2047</option> <option value="2048">2048</option> <option value="2049">2049</option> <option value="2050">2050</option> <option value="2051">2051</option> <option value="2052">2052</option> <option value="2053">2053</option> <option value="2054">2054</option> <option value="2055">2055</option> <option value="2056">2056</option> <option value="2057">2057</option> <option value="2058">2058</option> <option value="2059">2059</option> <option value="2060">2060</option> <option value="2061">2061</option> <option value="2062">2062</option> <option value="2063">2063</option> <option value="2064">2064</option> <option value="2065">2065</option></select>' +
        '<div class="ss-picker-button-container goog-inline-block" aria-hidden="true"><div id="entry.1138167882_picker" class="ss-calendar-button ss-hidden-button" tabindex="-1"><div class="docs-icon goog-inline-block"><div class="docs-icon-img-container docs-icon-img docs-icon-calendar">&nbsp;</div></div></div></div></div>' +
        '</div></div></div></div> <div class="ss-form-question errorbox-good" role="listitem">' +
        '<div dir="auto" class="ss-item  ss-time"><div class="ss-form-entry">' +
        '<label class="ss-q-item-label" for="entry_1433350736"><div class="ss-q-title">What time is it?' +
        '</div>' +
        '<div class="ss-q-help ss-secondary-text" dir="auto">A time...</div></label>' +
        '<div class="ss-q-time"><div class="ss-datetime-box goog-inline-block" dir="ltr"><select name="entry.1433350736_hour" id="entry.1433350736_hour" aria-label="Hour"><option value="">Hr</option>' +
        '<option value="01">01</option> <option value="02">02</option> <option value="03">03</option> <option value="04">04</option> <option value="05">05</option> <option value="06">06</option> <option value="07">07</option> <option value="08">08</option> <option value="09">09</option> <option value="10">10</option> <option value="11">11</option> <option value="12">12</option></select>' +
        ':' +
        '<select name="entry.1433350736_minute" id="entry.1433350736_minute" aria-label="Minute"><option value="">Min</option>' +
        '<option value="00">00</option> <option value="01">01</option> <option value="02">02</option> <option value="03">03</option> <option value="04">04</option> <option value="05">05</option> <option value="06">06</option> <option value="07">07</option> <option value="08">08</option> <option value="09">09</option> <option value="10">10</option> <option value="11">11</option> <option value="12">12</option> <option value="13">13</option> <option value="14">14</option> <option value="15">15</option> <option value="16">16</option> <option value="17">17</option> <option value="18">18</option> <option value="19">19</option> <option value="20">20</option> <option value="21">21</option> <option value="22">22</option> <option value="23">23</option> <option value="24">24</option> <option value="25">25</option> <option value="26">26</option> <option value="27">27</option> <option value="28">28</option> <option value="29">29</option> <option value="30">30</option> <option value="31">31</option> <option value="32">32</option> <option value="33">33</option> <option value="34">34</option> <option value="35">35</option> <option value="36">36</option> <option value="37">37</option> <option value="38">38</option> <option value="39">39</option> <option value="40">40</option> <option value="41">41</option> <option value="42">42</option> <option value="43">43</option> <option value="44">44</option> <option value="45">45</option> <option value="46">46</option> <option value="47">47</option> <option value="48">48</option> <option value="49">49</option> <option value="50">50</option> <option value="51">51</option> <option value="52">52</option> <option value="53">53</option> <option value="54">54</option> <option value="55">55</option> <option value="56">56</option> <option value="57">57</option> <option value="58">58</option> <option value="59">59</option></select>' +
        '' +
        '<select name="entry.1433350736_ampm" aria-label="AM or PM"><option value="AM">AM</option>' +
        '<option value="PM">PM</option></select>' +
        '<div class="ss-datetime-box-spacer goog-inline-block"></div></div></div></div></div></div>' +
        '<input type="hidden" name="draftResponse" value="[,,&quot;-5447606223563838523&quot;]' +
        '">' +
        '<input type="hidden" name="pageHistory" value="0">' +
        '' +
        '<input type="hidden" name="fvv" value="0">' +
        '' +
        '' +
        '<input type="hidden" name="fbzx" value="-5447606223563838523">' +
        '' +
        '<div class="ss-item ss-navigate"><table id="navigation-table"><tbody><tr><td class="ss-form-entry goog-inline-block" id="navigation-buttons" dir="ltr">' +
        '<input type="submit" name="submit" value="Submit" id="ss-submit" class="jfk-button jfk-button-action ">' +
        '<div class="ss-password-warning ss-secondary-text">Never submit passwords through Google Forms.</div></td>' +
        '<td id="progress-container"><div id="progress-bar" class="jfk-progressBar-nonBlocking progress-bar-horizontal goog-inline-block"></div>' +
        '<div id="progress-label" class="progress-label">100%: You made it.</div></td></tr></tbody></table></div></ol></form></div>' +
        '<div class="ss-footer"><div class="ss-attribution"></div>' +
        '<div class="ss-legal"><div class="disclaimer-separator"></div>' +
        '<div class="disclaimer" dir="ltr"><div class="powered-by-logo"><span class="powered-by-text">Powered by</span>' +
        '<a href="https://www.google.com/forms/about/?utm_source=product&amp;utm_medium=forms_logo&amp;utm_campaign=forms"><div class="ss-logo-container ss-logo-css-container"><div class="ss-logo-image"></div>' +
        '<span class="aria-only-help">Google Forms</span></div></a></div>' +
        '<div class="ss-terms"><span class="disclaimer-msg">This content is neither created nor endorsed by Google.</span>' +
        '<br>' +
        '<a href="https://docs.google.com/forms/d/1Z69tnhJNRl-8hFlTteWlzCVJHyNWz4Q9tTQAHlL5aEA/reportabuse?source=https://docs.google.com/forms/d/1Z69tnhJNRl-8hFlTteWlzCVJHyNWz4Q9tTQAHlL5aEA/viewform">Report Abuse</a>' +
        '-' +
        '<a href="http://www.google.com/accounts/TOS">Terms of Service</a>' +
        '-' +
        '<a href="http://www.google.com/google-d-s/terms.html">Additional Terms</a></div></div></div></div>' +
        '' +
        '<div id="docs-aria-speakable" class="docs-a11y-ariascreenreader-speakable docs-offscreen" aria-live="assertive" role="region" aria-atomic></div></div>' +
        '' +
        '' +
        '<script type=\'text/javascript\' src=\'/static/forms/client/js/1773870735-formviewer_prd.js\'></script>' +
        '<script type="text/javascript">H5F.setup(document.getElementById(\'ss-form\'));' +
        '          _initFormViewer(' +
        '            "[100,,[]\n]\n");</script></div></body></html>';
    });
});
