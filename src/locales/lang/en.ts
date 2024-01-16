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
                pie3d: {
                    _value: '3d pie',
                },
            },
            'surely-table': {
                _value: 'SurelyTable',
                drag: 'Row drag and drop',
            },
            naiveUI: {
                _value: 'NaiveUi',
                test: 'test',
            },
            'mid-utils': {
                _value: 'mid-utils',
            },
            'old-project': {
                _value: 'old-project',
                wordCloud: 'Dynamic Word Cloud',
            },
            plugin: {
                _value: 'Plugin',
                charts: {
                    _value: 'Chart',
                    echarts: 'ECharts',
                    antv: 'AntV',
                },
                copy: 'Copy',
                editor: {
                    _value: 'Editor',
                    quill: 'Quill',
                    markdown: 'Markdown',
                },
                icon: 'Icon',
                map: 'Map',
                print: 'Print',
                swiper: 'Swiper',
                video: 'Video',
            },
            webRtc: {
                _value: 'webRTC',
            },
            'web-gl': {
                _value: 'web-gl',
                '3d-map': '3d地图',
            },
        },
    },
};

export default locale;
