const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const rootPath = require("./rootPath");
const exclude = require("./exclude");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const command = require("./command");
const htmlPlugin = require("./htmlPlugin");

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

//  webpack.ModuleOptions
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
            test: /\.js$/,
            exclude,
            loader: "esbuild-loader",
            options: {
                loader: "js",
                target: "es2015",
            },
        },
        {
            test: /\.jsx$/,
            exclude,
            loader: "esbuild-loader",
            options: {
                loader: "jsx",
                target: "es2015",
            },
        },
        {
            test: /\.tsx$/,
            exclude,
            loader: "esbuild-loader",
            options: {
                loader: "tsx",
                target: "es2015",
                tsconfigRaw: require(path.join(rootPath, "./tsconfig.json")),
            },
        },
        {
            test: /\.ts$/,
            exclude,
            loader: "esbuild-loader",
            options: {
                loader: "ts",
                target: "es2015",
                tsconfigRaw: require(path.join(rootPath, "./tsconfig.json")),
            },
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

// webpack.ResolveOptions
const resolve = {
    alias: {
        "~": "/src",
    },
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    // descriptionFiles: ['package.json', path.join(__dirname, "../package.json")],
    modules: [path.resolve(rootPath, "./src"), "node_modules"],
    mainFields: ["main", "browser", "module"],
};

const setNodeEnvValue = () => {
    if (command.isDev) {
        return "development";
    }

    if (command.isProDev) {
        return "test";
    }

    if (command.isPro) {
        return "development_dev";
    }

    return "none";
};

const plugins = [
    new HtmlWebpackPlugin(htmlPlugin),

    new webpack.DefinePlugin({
        "process.env": { NODE_ENV: JSON.stringify(setNodeEnvValue()) },
    }),

    new webpack.ProvidePlugin({
        React: "react",
        ReactDom: "react-dom",
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
    const name = path.basename(rootPath);
    return name.includes("_") ? `/${name.split("_")[1]}/` : "/";
};

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
