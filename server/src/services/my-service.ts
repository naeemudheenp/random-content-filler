'use strict';

import type { Core } from '@strapi/strapi';

const myService = ({ strapi }: { strapi: Core.Strapi }) => ({
  getWelcomeMessage() {
    return 'Welcome to Strapi 🚀';
  },
  getConfigs() {
    return strapi.config.get('plugin.random-content-filler');
  },
});

export default myService;
