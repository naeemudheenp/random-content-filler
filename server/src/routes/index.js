module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/get-configs',
    handler: 'myController.configs',
    config: {
      policies: [],
    },
  },
];
