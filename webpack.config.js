const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const scssLoaders = [
  'vue-style-loader',
  {
    loader: 'css-loader',
    options: { importLoaders: 1 }
  },
  {
    loader: 'postcss-loader',
    options: { parser: 'postcss-scss', plugins: [ require('precss') ] }
  }
];

module.exports = {
  // entry: './src/main.js',
  entry: {
    app: './src/main.js',
    // vendor: ['vue'],
    // material: ['vue-material']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].js'
  },
  plugins: [
    new VueLoaderPlugin(),

  // new webpack.optimize.CommonsChunkPlugin({
  //   name: "vendor",
  //   // filename: "vendor.js"
  //   // (Give the chunk a different name)

  //   minChunks: Infinity,
  //   // (with more entries, this ensures that no other module
  //   //  goes into the vendor chunk)
  // })
  ],
  module: {
    rules: [{
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: scssLoaders
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': scssLoaders,
          },
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  optimization: {
    minimizer: [new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: true
          })],

  splitChunks: {
    chunks: "initial",
    // minSize: 30000,
    minChunks: 1,
    cacheGroups: {
    material: {
      test: /[\\/]vue-material[\\/]/,
      priority: -9,
      name: 'material'
  },
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        priority: -10,
        name: 'vendor'
    },
      default: {
        minChunks: 3,
        priority: -20,
        reuseExistingChunk: true
      }
    }
  },
  }
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}