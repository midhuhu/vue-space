const plugin: AuthRoute.Route = {
    name: 'plugin',
    path: '/plugin',
    component: 'basic',
    children: [
        {
            name: 'plugin_charts',
            path: '/plugin/charts',
            component: 'multi',
            children: [
                {
                    name: 'plugin_charts_echarts',
                    path: '/plugin/charts/echarts',
                    component: 'self',
                    meta: {
                        title: 'ECharts',
                        i18nTitle: 'message.routes.plugin.charts.echarts',
                    },
                },
                {
                    name: 'plugin_charts_antv',
                    path: '/plugin/charts/antv',
                    component: 'self',
                    meta: {
                        title: 'AntV',
                        i18nTitle: 'message.routes.plugin.charts.antv',
                    },
                },
            ],
            meta: {
                title: '图表',
                i18nTitle: 'message.routes.plugin.charts._value',
            },
        },
        {
            name: 'plugin_map',
            path: '/plugin/map',
            component: 'self',
            meta: {
                title: '地图',
                i18nTitle: 'message.routes.plugin.map',
            },
        },
        {
            name: 'plugin_video',
            path: '/plugin/video',
            component: 'self',
            meta: {
                title: '视频',
                i18nTitle: 'message.routes.plugin.video',
            },
        },
        {
            name: 'plugin_editor',
            path: '/plugin/editor',
            component: 'multi',
            children: [
                {
                    name: 'plugin_editor_quill',
                    path: '/plugin/editor/quill',
                    component: 'self',
                    meta: {
                        title: '富文本编辑器',
                        i18nTitle: 'message.routes.plugin.editor.quill',
                    },
                },
                {
                    name: 'plugin_editor_markdown',
                    path: '/plugin/editor/markdown',
                    component: 'self',
                    meta: {
                        title: 'markdown编辑器',
                        i18nTitle: 'message.routes.plugin.editor.markdown',
                    },
                },
            ],
            meta: {
                title: '编辑器',
                i18nTitle: 'message.routes.plugin.editor._value',
            },
        },
        {
            name: 'plugin_swiper',
            path: '/plugin/swiper',
            component: 'self',
            meta: {
                title: 'Swiper插件',
                i18nTitle: 'message.routes.plugin.swiper',
            },
        },
        {
            name: 'plugin_copy',
            path: '/plugin/copy',
            component: 'self',
            meta: {
                title: '剪贴板',
                i18nTitle: 'message.routes.plugin.copy',
            },
        },
        {
            name: 'plugin_icon',
            path: '/plugin/icon',
            component: 'self',
            meta: {
                title: '图标',
                i18nTitle: 'message.routes.plugin.icon',
            },
        },
        {
            name: 'plugin_print',
            path: '/plugin/print',
            component: 'self',
            meta: {
                title: '打印',
                i18nTitle: 'message.routes.plugin.print',
            },
        },
    ],
    meta: {
        title: '插件示例',
        i18nTitle: 'message.routes.plugin._value',
    },
};

export default plugin;
