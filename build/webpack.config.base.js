const path = require('path')

const config = {
  target: 'web',
  // 输入：项目主文件（入口文件）
  entry: path.join(__dirname, '../client/index.js'),
  output: {       // 输出
    // 输出的文件名
    filename: 'build.[hash:8].js',
    path: path.join(__dirname, '../dist')  // 输出路径
  },
  module: {       // 配置加载资源
    rules: [    // 规则
      {
        test: /\.(vue|js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        enforce: 'pre'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test:/\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,  // 文件小于1024字节，转换成base64编码，写入文件里面
              name: 'resources/[path][name]-[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  }
}

module.exports = config
