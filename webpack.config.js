const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

let files = ['index.html'];

function genHtmlPlugins(files) {
    return files.map((file) => {
        return new HtmlWebpackPlugin({
            filename: file.split('.')[0] + '.html',
            template: "./src/" + file
        })
    })
}


module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                }, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.ts$/,
                loader: "ts-loader"
            },
            {
                test: /\.pug$/,
                loader: "pug-loader"
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ],
    },
    plugins: [
    //     new HtmlWebpackPlugin({
    //     template: "./src/index.pug"
    // }),
    //     new HtmlWebpackPlugin({
    //         template: "./src/about.pug"
    //     }),
    //     new HtmlWebpackPlugin({
    //         template: "./src/contact.pug"
    //     }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
        new VueLoaderPlugin(),
    ].concat(genHtmlPlugins(files)),
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        }
    }
};