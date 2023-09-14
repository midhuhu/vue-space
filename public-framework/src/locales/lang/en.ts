import type { LocaleMessages } from 'vue-i18n';

const locale: LocaleMessages<I18nType.Schema> = {
  message: {
    system: {
      title: 'SoybeanAdmin'
    },
    routes: {
      'echarts-menu': {
        _value: 'echarts',
        'line-view': {
          _value: 'charts',
        },
        'map-view': {
          _value: 'map',
          china: 'china map',
          guangdong: 'guangdong map',
          ningxia: 'ningxia map'
        },
        'pie-3d': {
          _value: '3d pie',
        }
      },
    }
  }
};

export default locale;
