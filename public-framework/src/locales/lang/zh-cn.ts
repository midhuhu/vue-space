import type { LocaleMessages } from 'vue-i18n';

const locale: LocaleMessages<I18nType.Schema> = {
  message: {
    system: {
      title: 'Soybean管理系统'
    },
    routes: {
      'echarts-menu': {
        _value: 'echarts图表',
        'line-view': {
          _value: '图表',
        },
        'map-view': {
          _value: '地图',
          china: '中国地图',
          guangdong: '广东地图',
          ningxia: '宁夏地图'
        },
        'pie-3d': {
          _value: '3d圆柱',
        }
      },
    }
  }
};

export default locale;
