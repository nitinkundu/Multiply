// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-phantomjs-launcher'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    browsers: ['PhantomJS'],
      //customLaunchers: {
      //ChromeHeadlessCI: {
      //base: 'ChromeHeadless',
      //flags: ['--no-sandbox']
      //}
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage/Multiply'),
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true,
      thresholds: {
        statements: 50,
        lines: 50,
        branches: 50,
        functions: 50
      }
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless']
    //singleRun: false,
    //restartOnFileChange: true
  });
};
