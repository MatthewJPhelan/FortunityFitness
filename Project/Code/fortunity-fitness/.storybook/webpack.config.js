const path = require("path");

module.exports = {
  chainWebpack: config => {
    config.module.rules.delete("svg");
  },
  configureWebpack: {
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            prependData:  `
                                @import "Project/Styles/index.scss";
                                @import "Project/Styles/main.scss";
                                @import "Project/Styles/colours.scss";
                            `
                        }
                    }
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                          sourceMap: true
                        }
                    }
                ]
            },
              {
                test: /\.svg$/,
                loader: 'vue-svg-loader', // `vue-svg` for webpack 1.x
              },
              {
                test: /\.ts$/,
                use: [
                  {
                    loader: 'babel-loader'
                  },
                  {
                    loader: 'ts-loader',
                    options: {
                      transpileOnly: true,
                      appendTsSuffixTo: [
                        '\\.vue$'
                      ],
                      happyPackMode: false
                    }
                  }
                ]
              }
        ],
    },
  }
};