
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api", 
    createProxyMiddleware({
      target: "http://localhost:5173", // URL server sumber daya eksternal (http://localhost:5173)
      changeOrigin: true,
    })
  );
};
