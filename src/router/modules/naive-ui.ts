const naiveUi: AuthRoute.Route = {
    name: 'naive-ui',
    path: '/naive-ui',
    component: 'basic',
    meta: { title: 'NaiveUI' },
    children: [
        {
            name: 'naive-ui_test',
            path: '/naive-ui/test',
            component: 'self',
            meta: { title: '测试1' },
        },
    ],
};

export default naiveUi;
