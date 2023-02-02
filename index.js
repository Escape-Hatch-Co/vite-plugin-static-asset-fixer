function staticAssetFixer(config = {}) {
  const {
    https = true,
    host = 'localhost',
    port = 3000,
    dir = 'assets/',
  } = config;
  const assetPath = `http${https ? 's' : ''}://${host}:${port}/${dir}`;

  return {
    name: 'static-asset-fixer',
    enforce: 'post',
    apply: 'serve',
    transform(src) {
      return {
        code: src.replace(/\.\.\/assets/g, assetPath),
        map: null,
      };
    },
  };
}

module.exports = staticAssetFixer;
