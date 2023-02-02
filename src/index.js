export default function staticAssetFixer({
    host = 'localhost',
    https = true,
    port = 3000,
    dir = '',
  }) {
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
  