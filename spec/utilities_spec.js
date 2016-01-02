/*global define, describe, it, expect*/
define(['utilities'], function (utils) {
    'use strict';

    describe('The URL module', function () {
        describe('The isValidUrl method', function () {
            it('should accept https://docs.google.com/forms/d/1Z69tnhJNRl-8hFlTteWlzCVJHyNWz4Q9tTQAHlL5aEA/viewform', function () {
                expect(utils.isValidUrl('https://docs.google.com/forms/d/1Z69tnhJNRl-8hFlTteWlzCVJHyNWz4Q9tTQAHlL5aEA/viewform')).toBe(true);
            });

            it('should accept https://docs.google.com/forms/d/1Z69tnhJNRl_8hFlTteWlzCVJHyNWz4Q9tTQAHlL5aEA/viewform', function () {
                expect(utils.isValidUrl('https://docs.google.com/forms/d/1Z69tnhJNRl_8hFlTteWlzCVJHyNWz4Q9tTQAHlL5aEA/viewform')).toBe(true);
            });

            it('should accept http://docs.google.com/forms/d/1Z69tnhJNRl-8hFlTteWlzCVJHyNWz4Q9tTQAHlL5aEA/viewform', function () {
                expect(utils.isValidUrl('https://docs.google.com/forms/d/1Z69tnhJNRl-8hFlTteWlzCVJHyNWz4Q9tTQAHlL5aEA/viewform')).toBe(true);
            });

            it('should reject docs.google.com/forms/d/1Z69tnhJNRl-8hFlTteWlzCVJHyNWz4Q9tTQAHlL5aEA/viewform', function () {
                expect(utils.isValidUrl('docs.google.com/forms/d/1Z69tnhJNRl-8hFlTteWlzCVJHyNWz4Q9tTQAHlL5aEA/viewform')).toBe(false);
            });

            it('should reject https://docs.google.com/forms/d/1Z69tnhJNRl-8hFlTteWlzCVJHyNWz4Q9tTQAHlL5aEA/viewfor', function () {
                expect(utils.isValidUrl('https://docs.google.com/forms/d/1Z69tnhJNRl-8hFlTteWlzCVJHyNWz4Q9tTQAHlL5aEA/viewfor')).toBe(false);
            });

            it('should reject https://www.google.com', function () {
                expect(utils.isValidUrl('https://www.google.com')).toBe(false);
            });
        });
    });
});
