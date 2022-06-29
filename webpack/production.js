const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const { entry, plugins, moduleOption, resolve, output, experiments } = require("./common");
const command = require("./command");

// webpack.Configuration
const config = {
    entry,
    resolve,
    output: {
        ...output,
        ...{
            chunkFilename: "js/[name].[contenthash].js",
            filename: "js/[name].[contenthash].js",
        },
    },
    plugins: [
        ...plugins,
        new MiniCssExtractPlugin({ filename: "css/[name].[contenthash].css" }),
        new CompressionPlugin({ test: /\.js(\?.*)?$/i, algorithm: "gzip" }),
    ],
    module: moduleOption,
    mode: "production",
    devtool: "hidden-source-map",
    optimization: {
        chunkIds: "total-size",
        mangleWasmImports: true,
        moduleIds: "size",
        removeAvailableModules: true,
        runtimeChunk: "single",
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: "all",
                terserOptions: {
                    compress: {
                        drop_console: !command.isProDev,
                    },
                },
            }),
        ],
        splitChunks: {
            chunks: "all",
        },
    },
    experiments,
};

module.exports = config;
