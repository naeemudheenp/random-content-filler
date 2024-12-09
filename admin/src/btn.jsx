// ./admin/src/index.js
import React from 'react';
import { Button } from '@strapi/design-system/Button';

export default {
  register(app) {
    // Adding the component to the desired injection zone
    app.addComponents([
      {
        // Specify the injection zone
        area: 'content-manager.listView.actions',
        // Define the custom component
        component: () => (
          <Button variant="primary" onClick={() => console.log('Custom Action Button clicked!')}>
            Custom Action
          </Button>
        ),
      },
    ]);
  },
};
