var webpack = require('webpack')
var path = require('path')

// returns a Compiler instance
var compiler = webpack({
  entry: './app.js',
  context: __dirname,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        },
        include: __dirname
      }
    ]
  }
    // configuration
}, (err, stats) => {
  console.log('err')
  console.log(err)
  console.log('stats.hasErrors')
  console.log(stats.hasErrors())
  if (stats.hasErrors()) {
    console.log(stats.toJson().errors)
  }
  console.log('stats.hasWarnings')
  console.log(stats.hasWarnings())
  // console.log('stats')
  // console.log(stats)
})

compiler.handler = (err) => {
  console.log(err)
}
