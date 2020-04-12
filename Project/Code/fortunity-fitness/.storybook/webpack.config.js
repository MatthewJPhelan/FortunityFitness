const path = require("path");

module.exports = {
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
                                @import "@/Project/Styles/index.scss";
                                @import "@/Project/Styles/mixins.scss";
                                @import "@/Project/Styles/main.scss";
                                @import "@/Project/Styles/colours.scss";
                                @import "@/Project/Styles/icons.scss";
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
                test: /\.(svg)(\?.*)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                        name: 'img/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(gif)(\?.*)?$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 4096,
                      fallback: {
                        loader: 'file-loader',
                        options: {
                          name: 'img/[name].[hash:8].[ext]'
                        }
                      }
                    }
                  }
                ]
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
};