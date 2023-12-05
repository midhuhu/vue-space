import type { LocaleMessages } from 'vue-i18n';

const locale: LocaleMessages<I18nType.Schema> = {
    message: {
        system: {
            title: '测试用例',
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
                    ningxia: '宁夏地图',
                },
                'pie-3d': {
                    _value: '3d圆柱',
                },
            },
            'surely-table': {
                _value: '表格',
                'drag': {
                    _value: '行拖拽',
                },
            },
            'naive-ui': {
                _value: 'NaiveUI',
                'test': {
                    _value: '测试1',
                },
            },
            'mid-utils': {
                _value: '自用工具库',
            },
            'old-project': {
                _value: '旧项目',
                'word-cloud': {
                    _value: '动态词云图',
                },
            },
        },
    },
};

export default locale;
