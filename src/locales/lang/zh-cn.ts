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
                pie3d: {
                    _value: '3d圆柱',
                },
            },
            'surely-table': {
                _value: '表格',
                drag: '行拖拽',
            },
            naiveUI: {
                _value: 'NaiveUI',
                test: '测试1',
            },
            'mid-utils': {
                _value: '自用工具库',
            },
            'old-project': {
                _value: '旧项目',
                wordCloud: '动态词云图',
            },
            plugin: {
                _value: '插件示例',
                charts: {
                    _value: '图表',
                    echarts: 'ECharts',
                    antv: 'AntV',
                },
                copy: '剪贴板',
                editor: {
                    _value: '编辑器',
                    quill: '富文本',
                    markdown: 'Markdown',
                },
                icon: '图标',
                map: '地图',
                print: '打印',
                swiper: 'Swiper',
                video: '视频',
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
