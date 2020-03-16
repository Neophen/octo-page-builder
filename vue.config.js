const path = require("path");

module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/styles/app.scss")]
    }
  },

  configureWebpack: {
    output: { globalObject: "this" },
    externals: [
      "vue",
      "@vue/composition-api",
      "@popperjs/core",
      "core-js",
      "portal-vue",
      "@mykolasm/octo-ui",
      "vee-validate"
    ]
  }
};
