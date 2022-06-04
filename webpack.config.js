const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },

  // module: {
  //   rules: [
  //     {
  //       loader: "babel-loader",
  //       test: /\.js$/,
  //       exclude: /node_modules/,
  //     },
  //     {
  //       test: /\.s[ac]ss$/i,
  //       use: ["style-loader", "css-loader", "sass-loader"],
  //     },
  //   ],
  // },

  // devtool: "cheap-module-eval-map",
  // devServer: {
  //   contentBase: path.join(__dirname, "public"),
  // },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.s?css$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devtool: "cheap-module-source-map",

  mode: "development",

  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
  },
};

//loader = this is how a file gets transferred, for example from es6 <-> jsx
