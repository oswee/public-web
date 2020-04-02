module.exports = {
  entry: {
    main: './src/index.ts',
    /* vendor: './src/vendor.ts', */
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      // {
      //   test: /\.ts?$/,
      //   loader: 'awesome-typescript-loader',
      //   options: {
      //     transpileOnly: true,
      //   },
      // },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  stats: { children: false },
};
