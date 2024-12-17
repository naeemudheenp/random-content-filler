'use strict';

const myController = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi.plugin('random-content-filler').service('myService').getWelcomeMessage();
  },

  configs(ctx) {
    console.log('called configs');
    ctx.body = strapi.plugin('random-content-filler').service('myService').getConfigs();
  },
});

export default myController;
