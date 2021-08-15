// module.exports = { devServer: { https: true } }
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/waste-tracker/" : "/"
};
