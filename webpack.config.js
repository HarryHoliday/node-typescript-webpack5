/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const paths = require('./config/paths');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = (env, argv) => {
  process.env.NODE_ENV = argv.mode || 'development';
  // eslint-disable-next-line global-require
  const getEnvironment = require('./config/env');
  const isProd = argv.mode === 'production';
  const config = {
    mode: argv.mode,
    externalsPresets: { node: true },
    entry: path.resolve(__dirname, './src/index.ts'),
    output: {
      path: path.resolve(__dirname, './build'),
      publicPath: '/',
      filename: 'server.js',
    },
    resolve: {
      extensions: ['.ts', '.js'],
      plugins: [
        new TsconfigPathsPlugin({
          configFile: path.resolve(paths.appPath, './tsconfig.paths.json'),
        }),
      ],
    },
    externals: [nodeExternals()],
    module: {
      rules: [
        {
          test: /\.(ts)$/i,
          loader: 'ts-loader',
          exclude: ['/node_modules/'],
        },
      ],
    },
    plugins: [new webpack.DefinePlugin(getEnvironment()), new ESLintPlugin()],
    stats: 'errors-warnings',
  };
  if (!isProd) {
    config.plugins.push(
      new NodemonPlugin({
        ext: 'js,ts,json',
        verbose: true,
      })
    );
  }
  return config;
};
