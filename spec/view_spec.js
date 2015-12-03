/*global define, describe, it, expect*/
define(['view', 'jasmine-jquery'], function (view) {
    'use strict';

    describe('The View module', function () {
        it('should export its jQuery version', function () {
            expect(view.JQUERY_VERSION).toEqual('2.1.4');
        });

        describe('The clear method', function () {
            beforeEach(function () {
                loadFixtures('../../../../index.html');
                $('#original-output').attr('src', 'https://docs.google.com/forms/d/1Z69tnhJNRl-8hFlTteWlzCVJHyNWz4Q9tTQAHlL5aEA/viewform');
                $('#original-sources').text('<html>original</html>');
                $('#raw-output').html('<div>raw</div>');
                $('#raw-sources').text('<div>raw</div>');
                $('#bootstrap-output').html('<div>bootstrap</div>');
                $('#bootstrap-sources').text('<div>bootstrap</div>');
            });

            it('should remove output of original form', function () {
                expect($('#original-output')).not.toHaveAttr('src', '');
                expect($('#original-output')).toHaveAttr('src', 'https://docs.google.com/forms/d/1Z69tnhJNRl-8hFlTteWlzCVJHyNWz4Q9tTQAHlL5aEA/viewform');
                view.clear();
                expect($('#original-output')).toHaveAttr('src', '');
            });

            it('should remove sources of original form', function () {
                expect($('#original-sources')).not.toBeEmpty();
                view.clear();
                expect($('#original-sources')).toBeEmpty();
            });

            it('should remove output of raw form', function () {
                expect($('#raw-output')).not.toBeEmpty();
                view.clear();
                expect($('#raw-output')).toBeEmpty();
            });

            it('should remove sources of raw form', function () {
                expect($('#raw-sources')).not.toBeEmpty();
                view.clear();
                expect($('#raw-sources')).toBeEmpty();
            });

            it('should remove output of Bootstrap form', function () {
                expect($('#bootstrap-output')).not.toBeEmpty();
                view.clear();
                expect($('#bootstrap-output')).toBeEmpty();
            });

            it('should remove sources of Bootstrap form', function () {
                expect($('#bootstrap-sources')).not.toBeEmpty();
                view.clear();
                expect($('#bootstrap-sources')).toBeEmpty();
            });
        });
    });
});
