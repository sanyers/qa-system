const path = require('path');
// cdn 服务
const cdn = {
  externals: {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    'element-ui': 'ELEMENT',
  },
};

// 打包路径
const publicPath = process.env.NODE_ENV === 'production' ? '/qa-system/' : '/';

// gzip包
const CompressionWebpackPlugin = require('compression-webpack-plugin');
//匹配此 {RegExp} 的资源
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;

module.exports = {
  publicPath,
  outputDir: 'dist',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: '问答系统',
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
      chunksSortMode: 'manual',
    },
    '404': {
      entry: 'src/main.js',
      template: 'public/404.html',
      filename: '404.html',
      title: '问答系统',
      chunks: ['chunk-vendors', 'chunk-common', '404'],
      chunksSortMode: 'manual',
    },
  },
  productionSourceMap: false,
  configureWebpack: config => {
    // 开启cdn通过外部引用
    config.externals =
      process.env.NODE_ENV === 'production' ? cdn.externals : {};
    // // 开启gzip
    config.plugins.push(
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp(productionGzipExtensions),
        threshold: 10240,
        minRatio: 0.8,
      }),
    );
    config.module.rules.push({
      test: /\.md$/,
      use: [
        {
          loader: path.resolve(__dirname, './loaders/markdown-loader.js'),
          options: {},
        },
      ],
    });
  },
  // 构建时开启多进程处理 babel 编译
  parallel: require('os').cpus().length > 1,
};
