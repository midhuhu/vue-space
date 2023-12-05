const oldProject: AuthRoute.Route = {
    name: 'old-project',
    path: '/old-project',
    component: 'basic',
    meta: { title: '旧项目', i18nTitle: 'message.routes.old-project._value' },
    children: [
        {
            name: 'old-project_word-cloud',
            path: '/old-project/word-cloud',
            component: 'self',
            meta: { title: '动态词云图', i18nTitle: 'message.routes.old-project.word-cloud._value' },
        },
    ],
};

export default oldProject;
