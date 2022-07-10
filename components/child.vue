<template>
	<view>
		<u-button type="warning" @click="change">{{name}}</u-button>
		
	</view>
</template>

<script>
	export default {
		name:"child",
		props:{
			name:{
				type:String,
				default:'么么叽'
			}
			
		},
		
		data() {
			return {
				quei:'java'
			};
		},
		methods:{
			change(){
				uni.$emit('getfirst',this.quei)
			}
		}
	}
</script>

<style scoped lang="scss">
	
</style>