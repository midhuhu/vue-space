const echartsMenu: AuthRoute.Route = {
    name: 'echarts-menu',
    path: '/echarts-menu',
    component: 'basic',
    children: [
        {
            name: 'echarts-menu_map-view',
            path: '/echarts-menu/map-view',
            component: 'multi',
            children: [
                {
                    name: 'echarts-menu_map-view_china',
                    path: '/echarts-menu/map-view/china',
                    component: 'self',
                    meta: { title: '中国地图', i18nTitle: 'message.routes.echarts-menu.map-view.china', requiresAuth: true },
                },
                {
                    name: 'echarts-menu_map-view_guangdong',
                    path: '/echarts-menu/map-view/guangdong',
                    component: 'self',
                    meta: { title: '广东地图', i18nTitle: 'message.routes.echarts-menu.map-view.guangdong', requiresAuth: true },
                },
                {
                    name: 'echarts-menu_map-view_ningxia',
                    path: '/echarts-menu/map-view/ningxia',
                    component: 'self',
                    meta: { title: '宁夏地图', i18nTitle: 'message.routes.echarts-menu.map-view.ningxia', requiresAuth: true },
                },
            ],
            meta: { title: '地图map', i18nTitle: 'message.routes.echarts-menu.map-view._value', requiresAuth: true },
        },
        {
            name: 'echarts-menu_pie-3d',
            path: '/echarts-menu/pie-3d',
            component: 'self',
            meta: { title: '3d圆环图', i18nTitle: 'message.routes.echarts-menu.pie-3d._value', requiresAuth: true },
        },
        {
            name: 'echarts-menu_line-view',
            path: '/echarts-menu/line-view',
            component: 'self',
            meta: { title: '图表', i18nTitle: 'message.routes.echarts-menu.line-view._value', requiresAuth: true },
        },
    ],
    meta: {
        title: 'Echarts图表',
        i18nTitle: 'message.routes.echarts-menu._value',
    },
};

export default echartsMenu;
