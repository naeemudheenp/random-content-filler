'use strict';

const myController = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi.plugin('my-strapi-plugin').service('myService').getWelcomeMessage();
  },

  configs(ctx) {
    console.log('called configs');
    ctx.body = strapi.plugin('my-strapi-plugin').service('myService').getConfigs();
  },
});

export default myController;
