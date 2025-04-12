const isProd = process.env.NODE_ENV === 'production';
export default {
    output: 'export',
    basePath: isProd ? '/your-repo-name' : '',
    assetPrefix: isProd ? '/your-repo-name/' : '',
  };
