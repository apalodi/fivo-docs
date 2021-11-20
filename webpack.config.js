const path = require( 'path' );
const webpack = require( 'webpack' );

module.exports = {
    entry: './includes/admin/assets/src/index.js',
    output: {
        path: path.resolve( __dirname, 'includes/admin/assets/js' ),
        filename: 'block.js',
    },
    watch: 'production' !== process.env.NODE_ENV,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@wordpress/default"],
                        plugins: [
                          [
                            "@babel/transform-react-jsx",
                            { pragma: "wp.element.createElement" }
                          ]
                        ]
                    }
                },
            },
        ],
    },
}
