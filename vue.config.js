const path = require('path')
function resolve (dir) {
  return path.join(__dirname,dir)
}

module.exports = {
  baseUrl: '/',
  outputDir: 'dist',
  devServer: {
    proxy: 'http://localhost:0000',
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      }
    }
  },
  configureWebpack: config => {
    // process.env.NODE_ENV === 'production'
    config.resolve = {
      extensions: ['.js', '.vue', '.json',".css"],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
      },
    };
  },
  chainWebpack: (config) => {
    config.resolve.symlinks(true);
    /*
    config
      .plugin('copy-f7-css')
      .use(require('copy-webpack-plugin'), [[{
        from: path.resolve(__dirname,'./node_modules/framework7/css/framework7.min.css'),
        to: path.resolve(__dirname,'./dist/css'),
      }]])
      */
    return config;
  },
  // filenameHashing: false,
  transpileDependencies: [
  ],   
};
