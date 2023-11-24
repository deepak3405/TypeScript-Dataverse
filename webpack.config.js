const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebPackPlugins = require("html-webpack-plugin");
const { getDynamicEntries } = require("webpack-dynamic-entries");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
var HtmlWebpackSkipAssetsPlugin = require("html-webpack-skip-assets-plugin").HtmlWebpackSkipAssetsPlugin;
const WebpackDevServer = require("webpack-dev-server");
const options = {
    startingPath: "",
    trimAnyExtension: true,
    //skipFilesWithSuffix: [".d.ts"],
    skipFilesInFolder: ["Modals", "Components"],
};
module.exports = {
    devtool: false,
    target: "web",
    mode: "development",

    entry: getDynamicEntries("./src", options),

    output: {
        filename: "[name].js",
        //sourceMapFilename: "[name].js.map",
        path: path.resolve(__dirname, "WebResources/scripts"),

        library: ["ds"],
        libraryTarget: "var",
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: ["babel-loader", "ts-loader"],
                exclude: [/node_modules/],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin({
            dry: false,
            verbose: false,
            cleanOnceBeforeBuildPatterns: ["**/*"],
            cleanAfterEveryBuildPatterns: ["**/*--delete--*"],
        }),
        new HtmlWebPackPlugins({
            template: path.resolve(__dirname, "src", "looukupControl", "index.html"),
            filename: "index.html",
        }),
        new HtmlWebpackSkipAssetsPlugin({
            excludeAssets: [/ts.*.js/],
        }),
        new webpack.SourceMapDevToolPlugin({
            filename: "[name].js.map",
            exclude: [/ts.*.js/, /react.*.js/],
        }),
    ],
    resolve: {
        extensions: [".ts", ".js", ".tsx", "jsx"],
    },
};
