const HtmlWebPack = require('html-webpack-plugin')

module.exports =  {
    mode: "development",


    modules: {
        rules: [
            {
                  test: /\.html$/,
                  loader: 'html-loader',
                  options: {
                    sources: false
                  }
            }
        ]
    },

    optimization: {},

    plugins: [
        new HtmlWebPack()

    ]
}