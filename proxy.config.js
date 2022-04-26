const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'http://api.weatherbit.io/v2.0/current',
    secure: false,
    logLevel: 'debug', 
    pathRewrite: { '^/api': '' }
  }
];

module.exports = PROXY_CONFIG;