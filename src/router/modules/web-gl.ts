const webGl: AuthRoute.Route = {
    name: 'web-gl',
    path: '/web-gl',
    component: 'basic',
    meta: { title: 'web-gl', i18nTitle: 'message.routes.web-gl._value' },
    children: [
        {
            name: 'web-gl_3d-map',
            path: '/web-gl/3d-map',
            component: 'self',
            meta: { title: 'web-gl_3d-map', i18nTitle: 'message.routes.web-gl.3d-map' },
        },
    ],
};

export default webGl;
