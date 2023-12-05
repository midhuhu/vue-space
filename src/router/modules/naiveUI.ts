const naiveUI: AuthRoute.Route = {
    name: 'naiveUI',
    path: '/naiveUI',
    component: 'basic',
    meta: { title: 'NaiveUI', i18nTitle: 'message.routes.naiveUI._value' },
    children: [
        {
            name: 'naiveUI_test',
            path: '/naiveUI/test',
            component: 'self',
            meta: { title: '测试1', i18nTitle: 'message.routes.naiveUI.test' },
        },
    ],
};

export default naiveUI;
