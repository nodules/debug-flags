/* global describe, it */
var TEST_NODE_DEBUG = 'mod lib:one lib:two:func';

process.env['NODE_DEBUG'] = TEST_NODE_DEBUG;

var isDebugEnabledFor = require('../'),
    assert = require('assert');

console.log('RE: ', isDebugEnabledFor.regexp);

describe('NODE_DEBUG = "' + TEST_NODE_DEBUG + '", debug-flags', function() {
    var assertions = {
            'app': false,
            'mod': true,
            'lib': false,
            'lib:one': true,
            'lib:on': false,
            'lib:one:func': true,
            'lib:two': false,
            'lib:two:x': false,
            'lib:two:func': true,
            'lib:two:func:debug': true
        };

    Object.keys(assertions)
        .forEach(function(tag) {
            var expected = assertions[tag];

            it('should return `' + expected + '` for "' + tag + '"', function() {
                assert.strictEqual(isDebugEnabledFor(tag), expected);
            });
        });
});
