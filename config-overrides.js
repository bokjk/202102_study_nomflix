const {
    override,
    addWebpackModuleRule,
    addWebpackPlugin
  } = require("customize-cra");

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';
module.exports = override(
    addWebpackModuleRule(
        {
            test: /\.styl$/i,
            use:[
                devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                'css-loader',
                'stylus-loader',
            ],
        },
    ),
    addWebpackPlugin(
        new MiniCssExtractPlugin()
    )
)