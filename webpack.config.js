const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { getDynamicEntries } = require("webpack-dynamic-entries");
const options = {
    startingPath: "",
    trimAnyExtension: true,
    //skipFilesWithSuffix: [".d.ts"],
    skipFilesInFolder: ["Modals"],
};
module.exports = {
    devtool: "source-map",
    entry: getDynamicEntries("./src/", options),
    output: {
        filename: "[name].js",
        sourceMapFilename: "[name].js.map",
        path: path.resolve(__dirname, "WebResources/scripts/"),
        library: ["ds"],
        libraryTarget: "var",
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: "ts-loader",
                exclude: [/node_modules/, /typings/],
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
    ],
    resolve: {
        extensions: [".ts", ".js", ".tsx"],
    },
};
