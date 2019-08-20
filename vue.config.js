module.exports = {
    devServer: {
      proxy: {
          '/api': {
              target: "http://120.79.159.52",
              changeOrigin: true,
              pathRewrite:{
                  '^/api':'/'
              },
          },
      }
    }
  };
  