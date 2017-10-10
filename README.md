# e2e-tests-docklink
e2e tests

### Installing

##Install NodeJS version 6.X.X and later

##Install JDK version 8 and later

##Write in console npm install

```
npm install
```

### Running the tests

##Started with Google Chrome:

```
npm test
```

##Started with PhantomJS:

Write in console for start PhantomJs server:

```
phantomjs --webdriver=<port> (example phantomjs --webdriver=9515)
```

Uncomment and comment other string in protractor.config.js:

```
exports.config = {
    framework: 'jasmine',
    allScriptsTimeout: 9999999999999999,
    //for phantomjs
    seleniumAddress: 'http://localhost:9515',
    specs: ['specs/*-spec.js'],
    capabilities: {
        'browserName': 'phantomjs'
        //'browserName': 'chrome'
    }
};
```
