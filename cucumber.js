module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: [
      'src/support/**/*.ts',
      'src/steps/**/*.ts'
    ],
    format: ['progress',
      'html:reports/cucumber-report.html',
      'json:reports/cucumber-report.json'
    ],
    paths: ['tests/features/**/*.feature']
  }
};