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
  'echarts-menu_pie3d': () => import('./echarts-menu/pie3d/index.vue'),
  'mid-utils': () => import('./mid-utils/index.vue'),
  naiveUI_test: () => import('./naiveUI/test/index.vue'),
  'old-project_wordCloud': () => import('./old-project/wordCloud/index.vue'),
  plugin_charts_antv: () => import('./plugin/charts/antv/index.vue'),
  plugin_charts_echarts: () => import('./plugin/charts/echarts/index.vue'),
  plugin_copy: () => import('./plugin/copy/index.vue'),
  plugin_editor_markdown: () => import('./plugin/editor/markdown/index.vue'),
  plugin_editor_quill: () => import('./plugin/editor/quill/index.vue'),
  plugin_icon: () => import('./plugin/icon/index.vue'),
  plugin_map: () => import('./plugin/map/index.vue'),
  plugin_print: () => import('./plugin/print/index.vue'),
  plugin_swiper: () => import('./plugin/swiper/index.vue'),
  plugin_video: () => import('./plugin/video/index.vue'),
  'surely-table_drag': () => import('./surely-table/drag/index.vue')
};
