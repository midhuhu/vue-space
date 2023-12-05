const naiveUi: AuthRoute.Route = {
    name: 'naive-ui',
    path: '/naive-ui',
    component: 'basic',
    meta: { title: 'NaiveUI', i18nTitle: 'message.routes.naive-ui._value' },
    children: [
        {
            name: 'naive-ui_test',
            path: '/naive-ui/test',
            component: 'self',
            meta: { title: '测试1', i18nTitle: 'message.routes.naive-ui.test' },
        },
    ],
};

export default naiveUi;
