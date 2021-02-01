const proxy = [
    {
      context: '/api',
      target: 'https://pwsdatabasefunctions.azurewebsites.net',
    }
  ];
  module.exports = proxy;