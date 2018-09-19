import axios from 'axios';
import * as Cookies from 'tiny-cookie';

axios.$i18n = {
  t: (label) => label,
};

// http request 拦截器
axios.interceptors.request.use(
  (config) => {
    if (config.url.startsWith(config.baseURL)) {
      config.headers.lang = Cookies.get('lang');
    }
    return config;
  },
  (err) => {
    Promise.reject(err);
  },
);

// http response 拦截器
axios.interceptors.response.use(
  (response) => response,
  ({ response }) => {
    if (!response) {
      response = {
        status: -1,
        data: {},
      };
    }

    const { status, data } = response;
    if (typeof data.message === 'string') {
      data.message = [data.message];
    } else if (data.message instanceof Array && data.message.length > 1) {
      const [template, ...fill] = data.message;
      data.message = [template, fill];
    }
    if (status === -1) {
      alert(axios.$i18n.t('网络错误'));
    } else if (status > 500) {
      alert(axios.$i18n.t('服务器错误，请联系管理员'));
    } else if (status === 404) {
      alert(axios.$i18n.t('请求的项目不存在'));
    } else if (status === 401) {
      alert(axios.$i18n.t('请退出重新登录'));
    } else if (status === 403) {
      alert(axios.$i18n.t('无权访问'));
    } else if (status >= 400 && data.message.length > 0) {
      alert(axios.$i18n.t(...data.message));
    }
    return Promise.reject(data);
  },
);

const vueAxios = {
  install(Vue, { i18n, baseUrl }) {
    axios.defaults.timeout = 5000;
    axios.$i18n = i18n;
    axios.defaults.baseURL = baseUrl;
    axios.defaults.withCredentials = true;
    Object.defineProperty(Vue.prototype, '$axios', { value: axios });
  },
};

export { vueAxios as default, axios };
