<template>
	<view>
		<u-tabbar fixed :value="value1" @change="name => value1 = name" :fixed="false" :placeholder="false"
			:safeAreaInsetBottom="false">
			<u-tabbar-item text="首页" icon="home"  name="home"></u-tabbar-item>
			<u-tabbar-item text="放映厅" icon="photo" name="photo"></u-tabbar-item>
			<u-tabbar-item text="直播" icon="play-right" name="play-right"></u-tabbar-item>
			<u-tabbar-item text="我的" name="account" icon="account"></u-tabbar-item>
		</u-tabbar>
	</view>
</template>

<script>
	export default {
		name: "tabBar",
		data() {
			return {
				value1: 'home'
			};
		},
		methods: {
			click1(e) {
				console.log('click1', e);
			}
		}
	}
</script>

<style>

</style>
