import type { RouteComponent } from 'vue-router';

export const views: Record<
  PageRoute.LastDegreeRouteKey,
  RouteComponent | (() => Promise<{ default: RouteComponent }>)
> = {
  403: () => import('./_builtin/403/index.vue'),
  404: () => import('./_builtin/404/index.vue'),
  500: () => import('./_builtin/500/index.vue'),
  'constant-page': () => import('./_builtin/constant-page/index.vue'),
  login: () => import('./_builtin/login/index.vue'),
  'not-found': () => import('./_builtin/not-found/index.vue'),
  'echarts-menu_line-view': () => import('./echarts-menu/line-view/index.vue'),
  'echarts-menu_map-view_china': () => import('./echarts-menu/map-view/china/index.vue'),
  'echarts-menu_map-view_guangdong': () => import('./echarts-menu/map-view/guangdong/index.vue'),
  'echarts-menu_map-view_ningxia': () => import('./echarts-menu/map-view/ningxia/index.vue'),
  'echarts-menu_pie-3d': () => import('./echarts-menu/pie-3d/index.vue')
};
