let assetServer;
let _i18n;
const _filters = {
  remoteAsset(path, root) {
    if (
      path &&
      !path.startsWith('http://') &&
      !path.startsWith('https://') &&
      !path.startsWith('blob:')
    ) {
      path = (root || assetServer || '') + path;
    }
    return path;
  },
  remoteArticleAsset(html, root) {
    return html.replace(/ src="\//g, ` src="${root || assetServer || ''}/`);
  },
  reverse(array) {
    array = Object.assign([], array);
    array.reverse();
    return array;
  },
  dateformat(d, format) {
    const date = new Date(d);
    return Number.isNaN(date.valueOf()) ? '' : _i18n.d(new Date(d), format);
  },
};

const filters = {
  setAssetServer(root) {
    assetServer = root;
  },
  install(Vue, i18n) {
    _i18n = i18n;
    Object.keys(_filters).forEach((name) => {
      Vue.filter(name, _filters[name]);
    });
  },
  all: _filters,
};

export default filters;
