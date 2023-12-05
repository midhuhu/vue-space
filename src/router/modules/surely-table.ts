const surelyTable: AuthRoute.Route = {
    name: 'surely-table',
    path: '/surely-table',
    component: 'basic',
    children: [
        {
            name: 'surely-table_drag',
            path: '/surely-table/drag',
            component: 'self',
            meta: { title: '行拖拽' },
        },
    ],
    meta: { title: 'SurelyTable表格' },
};

export default surelyTable;
