const oldProject: AuthRoute.Route = {
    name: 'old-project',
    path: '/old-project',
    component: 'basic',
    meta: { title: '旧项目', i18nTitle: 'message.routes.old-project._value' },
    children: [
        {
            name: 'old-project_wordCloud',
            path: '/old-project/wordCloud',
            component: 'self',
            meta: { title: 'old-project_wordCloud', i18nTitle: 'message.routes.old-project.wordCloud' },
        },
    ],
};

export default oldProject;
