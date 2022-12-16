// webpack.config.js
const path = require('path');
module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.min.js',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, './dist'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.svg$/,
        use: [
          // 'svg-inline-loader',
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.(sa|c|sc|le)ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      Resources: path.resolve(__dirname, './src/resources/'),
      Components: path.resolve(__dirname, './src/components/'),
      Pages: path.resolve(__dirname, './src/pages/'),
      Services: path.resolve(__dirname, './src/services/'),
      Features: path.resolve(__dirname, './src/features/'),
      Assets: path.resolve(__dirname, './src/assets/'),
      Templates: path.resolve(__dirname, './src/templates/'),
    },
  },
};
