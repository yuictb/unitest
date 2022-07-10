<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<child :name='name'></child>
		<ten></ten>
	</view>
</template>

<script>
	import Child from '@/components/child.vue';
	import Ten from '@/components/ten.vue'
	export default {
		data() {
			return {
				title: 'Hello',
				name:'web前端'
			}
		},
		components:{
			Child,
			Ten
		},
		async onLoad() {
			console.log('加载完成')
             uni.$on('getfirst',(t)=>{
				 console.log('成功改变');
				 this.name=t
			 });
			 // let advlist=await this.$u.api.getSwipper()
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
