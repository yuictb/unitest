<template>
	<view>
		<u-popup  mode="center" :show="show" @close="close" @open="open">
				<text>出淤泥而不染，濯清涟而不妖</text>
		</u-popup>
		<u-button @click="show = true">打开</u-button>
	</view>
</template>

<script>
	export default {
		name: "ten",
		data() {
			return {
                show:false,
			};
		},
		methods:{
			 close(){
				this.show=false
			},
			open(){
				console.log('open');
			}
		}
	}
</script>

<style lang="scss">
  
</style>
