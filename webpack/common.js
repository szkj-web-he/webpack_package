const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const rootPath = require("./rootPath");
const exclude = require("./exclude");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const command = require("./command");
const htmlPlugin = require("./htmlPlugin");
const BabelConfig = require("./findRootBabel");
// webpack.Entry
/**
 * 入口文件
 * core-js
 * regenerator-runtime/runtime
 * 做兼容处理
 */
const entry = {
    app: [path.join(__dirname, "../assets/js/index.js"), "./src/index.tsx"],
};
/**
 * @type {import('webpack').ModuleOptions}
 */
const moduleOption = {
    rules: [
        {
            test: /.ico$/,
            type: "asset/resource",
            generator: {
                filename: "/[name][ext][query]",
            },
        },
        {
            test: /.(woff2?|pdf|eot|ttf|svg|opentype|otf)$/,
            type: "asset/resource",
            generator: {
                filename: "assets/[name][ext][query]",
            },
        },
        {
            test: /.(png|jpe?g|gif)$/,
            type: "asset",
            generator: {
                filename: "assets/[hash][ext][query]",
            },
            parser: {
                dataUrlCondition: {
                    maxSize: 10 * 1024, // 10kb
                },
            },
        },
        {
            test: /.jsx?$/,
            exclude,
            use: [
                {
                    loader: "babel-loader",
                    options: BabelConfig,
                },
            ],
        },
        {
            test: /.(j|t)sx?$/,
            exclude,
            use: [
                {
                    loader: "babel-loader",
                    options: BabelConfig,
                }
            ],
        },
        {
            test: /\.(sa|sc)ss$/,
            use: [
                {
                    loader: command.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                },
                {
                    loader: "css-loader",
                    options: {
                        importLoaders: 3,
                        modules: {
                            localIdentName: "[local]",
                        },
                    },
                },
                {
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: {
                            config: path.resolve(__dirname, "../postcss.config.js"),
                        },
                    },
                },
                { loader: "resolve-url-loader" },
                {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true,
                    },
                },
            ],
        },
        {
            test: /\.css$/,
            use: [
                {
                    loader: command.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                },
                {
                    loader: "css-loader",
                    options: {
                        importLoaders: 1,
                        modules: {
                            localIdentName: "[local]",
                        },
                    },
                },
                {
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: {
                            config: path.resolve(__dirname, "../postcss.config.js"),
                        },
                    },
                },
            ],
        },
    ],
};

/**
 * @type {import('webpack').ResolveOptions}
 */
const resolve = {
    alias: {
        "~": "/src",
    },
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    modules: [path.resolve(rootPath, "./src"), "node_modules"],
    mainFields: ["main", "browser", "module"],
};

const setNodeEnvValue = () => {
    if (command.isDev) {
        return "development";
    }

    if (command.isProV1) {
        return "v1_dev";
    }
    if (command.isProV2) {
        return "v2_dev";
    }
    if (command.isTestV1) {
        return "v1_test";
    }
    if (command.isTestV2) {
        return "v2_test";
    }

    if (command.isPro) {
        return "production";
    }

    return "none";
};

const setBaseName = () => {
    if (command.isProV1) {
        return "/v1/dev";
    }
    if (command.isProV2) {
        return "/v2/dev";
    }
    if (command.isTestV1) {
        return "/v1/test";
    }
    if (command.isTestV2) {
        return "/v2/test";
    }

    return "/";
};

/**
 * @type {import('webpack').plugins}
 */
const plugins = [
    new HtmlWebpackPlugin(htmlPlugin),

    new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify(setNodeEnvValue()),
            BASENAME: JSON.stringify(setBaseName()),
        },
    }),


    new ForkTsCheckerWebpackPlugin({
        eslint: {
            enabled: true,
            files: "./src/**/*.{ts,tsx,js,jsx}",
        },
        issue: {
            exclude: ({ file }) => {
                return file?.includes("node_modules") || false;
            },
        },
        typescript: {
            enabled: true,
            diagnosticOptions: {
                semantic: true,
                syntactic: true,
            },
        },
    }),
    new webpack.ProgressPlugin({ percentBy: "entries" }),
];

const getPublicPath = () => {
    if (command.isProV1) {
        return "/v1/dev/";
    }
    if (command.isProV2) {
        return "/v2/dev/";
    }
    if (command.isTestV1) {
        return "/v1/test/";
    }
    if (command.isTestV2) {
        return "/v2/test/";
    }

    return "/";
};


/**
 * @type {import('webpack').output}
 */
const output = {
    publicPath: command.isDev ? "/" : getPublicPath(),
    clean: true,
    path: path.join(rootPath, "/build"),
    pathinfo: false,
    charset: true,
};

module.exports = {
    entry,
    moduleOption,
    resolve,
    plugins,
    output,
    experiments: {
        asyncWebAssembly: true,
        syncWebAssembly: true,
    },
};
