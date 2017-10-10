exports.config = {
    framework: 'jasmine',
    allScriptsTimeout: 9999999999999999,
    //for phantomjs
    //seleniumAddress: 'http://localhost:9515',
    specs: ['specs/*-spec.js'],
    capabilities: {
        //'browserName': 'phantomjs'
        'browserName': 'chrome'
    }
};
