import VueI18n from 'vue-i18n';
import chs from './zh';

const locales = {
  zh: chs,
};

const I18n = () =>
  new VueI18n({
    locale: 'zh',
    messages: locales,
    dateTimeFormats: {
      zh: {
        sshort: {
          year: '2-digit',
          month: 'short',
          day: 'numeric',
        },
        md: {
          month: '2-digit',
          day: '2-digit',
        },
        short: {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        },
        conv: {
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        },
        long: {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          hour12: false,
        },
        shorttime: {
          hour: 'numeric',
          minute: 'numeric',
          hour12: false,
        },
      },
    },
  });

export { I18n as default, VueI18n };
