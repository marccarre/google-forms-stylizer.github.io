/*global define, describe, it, expect*/
define(['controller'], function (controller) {
    'use strict';

    describe('The Controller module', function () {
        it('should export its jQuery version', function () {
            expect(controller.JQUERY_VERSION).toEqual('2.1.4');
        });

        it('should export its Bootstrap version', function () {
            expect(controller.BOOTSTRAP_VERSION).toEqual('3.3.6');
        });
    });
});
