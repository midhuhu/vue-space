import type { LocaleMessages } from 'vue-i18n';

const locale: LocaleMessages<I18nType.Schema> = {
    message: {
        system: {
            title: 'TestCase',
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
                    ningxia: 'ningxia map',
                },
                'pie-3d': {
                    _value: '3d pie',
                },

            },
            'surely-table': {
                _value: 'SurelyTable',
                'drag': {
                    _value: 'Row drag and drop',
                },
            },
            'naive-ui': {
                _value: 'NaiveUi',
                'test': {
                    _value: 'test',
                },
            },
            'mid-utils': {
                _value: 'mid-utils',
            },
            'old-project': {
                _value: 'old-project',
                'word-cloud': {
                    _value: 'Dynamic Word Cloud',
                },
            },
        },
    },
};

export default locale;
