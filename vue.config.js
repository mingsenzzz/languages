const path = require("path");
const bol = true;
module.exports = {
  pluginOptions: {
    i18n: {
      locale: "zh",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false,
    },
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          hack:
            bol &&
            `true; @import "${path.join(
              __dirname,
              "./src/common/customizeTheme.less"
            )}";`,
        },
      },
    },
  },
};
