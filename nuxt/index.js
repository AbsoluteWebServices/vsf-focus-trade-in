import path from 'path';

export default function (moduleOptions) {
  this.extendBuild((config) => {
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias['@absolute-web/vsf-focus-trade-in$'] = require.resolve('@absolute-web/vsf-focus-trade-in');
  });

  this.addPlugin({
    src: path.resolve(__dirname, './plugin.js'),
    options: moduleOptions
  });
}
