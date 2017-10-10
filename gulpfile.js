var gulp = require('gulp');
var protractor = require("gulp-protractor").protractor;

// Download and update the selenium driver
var webdriver_update = require('gulp-protractor').webdriver_update_specific;

// Downloads the selenium webdriver - stupid solution to pass extra args like ignore_ssl
gulp.task('webdriver_update', webdriver_update());

gulp.task('protractor', ['webdriver_update'], function(){
    gulp.src(["./src/specs/*.js"]).pipe(protractor({
        configFile: "./src/protractor.config.js"
    })).on('error', function(e) { throw e });
});