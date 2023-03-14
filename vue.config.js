const path = require("path");

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/teste_descoberta/" : "/",
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/styles/global.scss")]
    }
  },
};