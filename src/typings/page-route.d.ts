declare namespace PageRoute {
  /**
   * the root route key
   * @translate 根路由
   */
  type RootRouteKey = 'root';

  /**
   * the not found route, which catch the invalid route path
   * @translate 未找到路由(捕获无效路径的路由)
   */
  type NotFoundRouteKey = 'not-found';

  /**
   * the route key
   * @translate 页面路由
   */
  type RouteKey =
    | '403'
    | '404'
    | '500'
    | 'constant-page'
    | 'echarts-menu'
    | 'echarts-menu_line-view'
    | 'echarts-menu_map-view'
    | 'echarts-menu_map-view_china'
    | 'echarts-menu_map-view_guangdong'
    | 'echarts-menu_map-view_ningxia'
    | 'echarts-menu_pie-3d'
    | 'login'
    | 'mid-utils'
    | 'naive-ui'
    | 'naive-ui_test'
    | 'not-found'
    | 'old-project'
    | 'old-project_word-cloud'
    | 'surely-table'
    | 'surely-table_drag';

  /**
   * last degree route key, which has the page file
   * @translate 最后一级路由(该级路有对应的页面文件)
   */
  type LastDegreeRouteKey = Extract<
    RouteKey,
    | '403'
    | '404'
    | '500'
    | 'constant-page'
    | 'echarts-menu_line-view'
    | 'echarts-menu_map-view_china'
    | 'echarts-menu_map-view_guangdong'
    | 'echarts-menu_map-view_ningxia'
    | 'echarts-menu_pie-3d'
    | 'login'
    | 'mid-utils'
    | 'naive-ui_test'
    | 'not-found'
    | 'old-project_word-cloud'
    | 'surely-table_drag'
  >;
}
