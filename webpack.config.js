const path = require('path');
module.exports = {
    entry: {
        button: "./web/components/button.tsx"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
    }
};