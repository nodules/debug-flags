var ENV_DEBUG = process.env['NODE_DEBUG'],
    debugTagsRe = (typeof ENV_DEBUG === 'string' && ENV_DEBUG.trim().length > 0) &&
        new RegExp('^(' + ENV_DEBUG.replace(/\s+/g, '|') + ')(?::\\S+)*$', 'i');

module.exports =
    /**
     * @example
     *      let NODE_DEBUG="app lib:hello:world lib:trace"
     *
     *      isDebugEnabledFor('some_module') => false
     *      isDebugEnabledFor('app') => true
     *      isDebugEnabledFor('app:main') => true
     *      isDebugEnabledFor('lib:hello:earth') => false
     *      isDebugEnabledFor('lib:hello:world') => true
     *      isDebugEnabledFor('lib') => false
     *      isDebugEnabledFor('lib:trace:fn') => true
     *
     * @param {String} tag format: ^[^:]+(\:[^:]+)*
     * @returns {Boolean}
     */
    function(tag) {
        return debugTagsRe && debugTagsRe.test(tag);
    };

module.exports.regexp = debugTagsRe;
