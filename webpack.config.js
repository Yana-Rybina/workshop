const path = require('path'); /*пропись путей*/
const miniCssExtractPlugin = require('mini-css-extract-plugin'); /*для создания файла css*/

module.exports = {
    entry: {  /*входные точки проекта*/
        main:[
            path.resolve(__dirname, './src/main.js'),
            path.resolve(__dirname, './src/main.scss'),
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'), /*путь куда положить файл*/
        filename: 'js/[name].js' /*то что создается*/
    },
    module:{
        rules:[{
            test: /\.s[ac]ss$/i,
            use: [
                {
                    loader: miniCssExtractPlugin.loader,
                },
                'css-loader',
                'sass-loader',

            ]
        }]
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
    ]
};