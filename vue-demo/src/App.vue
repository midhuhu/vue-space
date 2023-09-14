<template>
	<div id="vue-H">
		<div id="header">
			<span class="title">Vue 测试用例</span>
		</div>
		<div id="content">
			<div id="aside">
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/echarts">Echarts</RouterLink>
				<RouterLink to="/map_gd">Map_gd</RouterLink>
				<RouterLink to="/map_nx">Map_nx</RouterLink>
				<RouterLink to="/map_china">Map_china</RouterLink>
				<RouterLink to="/pie_3d">Pie_3d</RouterLink>
				<RouterLink to="/pie_3d_line">Pie_3d_line</RouterLink>
			</div>
			<div id="main">
				<div id="layout">
					<RouterView />
				</div>
				<div id="footer">
					<span class="footer">© 2022 MIDHUHU </span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<style lang="less" scoped>
#vue-H {
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
}
#header {
	height: 60px;
	display: flex;
    align-items: center;
    padding: 0 20px;
	background-color: rgba(69, 144, 255);
	.title {
		font-size: 30px;
		color: #fff;
		text-align: center;
		line-height: 60px;
		margin-left: 50px;
	}
}
#content {
	display: flex;
	height: 100%;
	#aside {
		flex-shrink: 0;
        overflow-x: hidden;
        overflow-y: auto;
        overflow-y: overlay;
        scrollbar-width: none;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        z-index: 1;
		width: 250px;
		background-color: rgb(188, 220, 255);
		display: flex;
		flex-direction: column;
		a {
			color: rgba(69, 144, 255);
			text-decoration: none;
			font-size: 22px;
			text-align: center;
			padding: 10px;
		}
	}
	#main {
		flex: 1;
        overflow: auto;
        height: calc(100vh - 60px);
        display: flex;
        flex-direction: column;
		#layout {
			padding: 15px 20px;
            flex: 1;
            overflow: auto;
			min-width: 1024px;
			position: relative;
		}
	}
}
#footer {
	height: 40px;
	text-align: center;
	.footer {
		width: 100%;
		font-size: 14px;
		color: #000;
		line-height: 40px;
	}
}
</style>
