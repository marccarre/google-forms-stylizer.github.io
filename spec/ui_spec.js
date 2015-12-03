/*global define, describe, it, expect*/
define(['ui'], function (ui) {
    'use strict';

    describe('The UI module', function () {
        it('should export its jQuery version', function () {
            expect(ui.JQUERY_VERSION).toEqual('2.1.4');
        });

        it('should export its Bootstrap version', function () {
            expect(ui.BOOTSTRAP_VERSION).toEqual('3.3.6');
        });
    });
});
