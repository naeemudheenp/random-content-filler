'use strict';

module.exports = ({ strapi }) => ({
  getWelcomeMessage() {
    return 'Welcome to Strapi 🚀';
  },

  getConfigs() {
    return strapi.config.get('plugin.random-content-filler');
  },
});

