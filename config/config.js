const config = {
    development: {
      url: 'http://camphelpersite.com',
      // MongoDB connection settings
      database: {
        host: '127.0.0.1',
        port: '27017',
        db: 'campsite_helper'
      },
      // Server details
      server: {
        host: '127.0.0.1',
        port: '3000'
      }
    }
  };
  
  module.exports = config;