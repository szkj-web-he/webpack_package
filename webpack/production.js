const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const { entry, plugins, moduleOption, resolve, output, experiments } = require("./common");
const command = require("./command");

const getPublicPath = () => {
    if (command.isPro) {
        return true;
    }
    if (command.isTestV1) {
        return true;
    }
    if (command.isTestV2) {
        return true;
    }

    return false;
};

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
        nodeEnv: false,
        minimizer: [
            new TerserPlugin({
                extractComments: "all",
                terserOptions: {
                    compress: {
                        drop_console: getPublicPath(),
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
