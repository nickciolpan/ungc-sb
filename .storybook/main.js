const path = require('path');
const autoprefixer = require('autoprefixer');
const importer = require('postcss-import');
const tailwind = require('tailwindcss');

module.exports = {
  stories: ['../stories/**/*.stories.js'],
  webpackFinal: async (config, { configType }) => {
    console.log('this should run');
    config.module.rules.push({
      test: /\.(scss)$/,
      include: path.resolve(__dirname, "./../"),
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            sourceMap: true,
            importLoaders: 1
          }
        },
        {
          loader: "postcss-loader",
          options: {
            autoprefixer: {
              browsers: ["last 2 versions"]
            },
            sourceMap: true,
            ident: "postcss",
            plugins: () => [autoprefixer, importer, tailwind]
          }
        },
        {
          loader: "sass-loader",
          options: {
            sourceMap: true
          }
        }
      ]
    });
    return config;
  },
};
