import { getTranslation } from './utils/getTranslation';
import { PLUGIN_ID } from './pluginId';
import { Initializer } from './components/Initializer';
import { FillRandomData } from './components/fill-data'

export default {
  register(app) {

    app.registerPlugin({
      id: PLUGIN_ID,
      initializer: Initializer,
      isReady: false,
      name: PLUGIN_ID,
    });
  },

  bootstrap(app) {
    app.getPlugin("content-manager").apis.addEditViewSidePanel("editView", "right-links", {
      name: "random-text-filler",
      Component: FillRandomData
    });
  },

  async registerTrads(app) {
    const { locales } = app;

    const importedTranslations = await Promise.all(
      locales.map((locale) => {
        return import(`./translations/${locale}.json`)
          .then(({ default: data }) => ({
            data: getTranslation(data),
            locale,
          }))
          .catch(() => ({
            data: {},
            locale,
          }));
      })
    );

    return importedTranslations;
  },
};
